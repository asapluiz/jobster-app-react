import { InputGroupContainer } from "../../components";
import JobCardContainer from "../../components/jobCardContainer";
import { jobs, allJobsFormData } from "../../utils/links";

interface AllJobsType{
  search:string
  sort: string
  status:string
  type:string
}
export default function AllJobs(){

  const searchJobData = (values:AllJobsType)=>{
    console.log(values)
  }
  
  return(
    <div style={{padding: "30px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <InputGroupContainer title="Search Form"  formData={searchJobData} formFields={allJobsFormData} >
          <button style={{marginTop: "33px"}} className="btn btn-danger" type="submit">Submit</button>
        </InputGroupContainer>
        <JobCardContainer jobDescriptionArr={jobs}/>
      
    </div>
  )
}

