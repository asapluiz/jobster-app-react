import { InputGroupContainer } from "../../components";
import {  addJobs } from "../../utils/links";
import customFetch from "../../utils/axios";
import {toast} from "react-toastify"
import { LoaderFunction, useLoaderData, useParams } from "react-router-dom";
import { JobCardType } from "../../components/JobCard";
import cloneDeep from 'lodash/cloneDeep';


interface AddJobsType{
  position: string, 
  company: string
  joblocation: string
  status: string
  type: string
}


export const loader: LoaderFunction = async ({ params }):Promise<JobCardType|undefined> => {
  
  try{
    const resp = await customFetch.get(
      `/jobs`
    )
    const allJobs = resp.data
    for(let Index = 0; Index < allJobs.jobs.length; Index++){
      if(allJobs.jobs[Index]._id === params.jobid){
        return allJobs.jobs[Index]
      }
    }
    throw new Error("Job not found")
    
  }catch(err){
    toast.error("job not found")
  }
}

export default function AddJobs(){

  const job = useLoaderData() as JobCardType | undefined;
  let { jobid } = useParams()
  let deepCopyAddJob = cloneDeep(addJobs);
  
  if(job && jobid){
    deepCopyAddJob.map(jobData => ({
      ...jobData,
      value: jobData.name === "position"?
        jobData.value = job.position: 
        jobData.name === "company"?
        jobData.value = job.company:
        jobData.name === "joblocation"?
        jobData.value = job.jobLocation:
        jobData.name === "status"?
        jobData.value = job.status:
        jobData.name === "type"?
        jobData.value = job.jobType: null

    }))
  }
  
  const addJobData = async(values:AddJobsType)=>{
    try{
      await customFetch.post("/jobs", values)
      toast.success("Job added successfully")
    }catch(err){
      toast.error("Error while ading Job")
    }
  }

  const EditJobData = async(values:AddJobsType)=>{
    try{
      await customFetch.patch(`/jobs/${job!._id}`, values)
      toast.success("Job edited successfully")
    }catch(err){
      toast.error("Error while ading Job")
    }
  }

  return(
    <div style={{padding: "0px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <InputGroupContainer title="Add Job" formData={!job?addJobData:EditJobData} formFields={deepCopyAddJob} >

          <div style={{display:"flex", justifyContent:"space-around"}}>
            <button 
              style={{marginTop: "33px"}} 
              // onClick={() => formikProps.resetForm()} 
              className="btn btn-hero btn-clear " 
              type="submit"
            >clear</button>
            <button style={{marginTop: "33px"}} className="btn btn-hero" type="submit">Submit</button>
          </div>
          
        </InputGroupContainer>  
    </div>
  )
}





