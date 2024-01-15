import { InputGroupContainer } from "../../components";
import {  addJobs } from "../../utils/links";
import customFetch from "../../utils/axios";
import {toast} from "react-toastify"


interface AddJobsType{
  position: string, 
  company: string
  joblocation: string
  status: string
  type: string
}

export default function AddJobs(){


  
  const addJobData = async(values:AddJobsType)=>{
    try{
      await customFetch.post("/jobs", values)
      toast.success("Job added successfully")
    }catch(err){
      toast.error("Error while ading Job")
    }
  }

  return(
    <div style={{padding: "0px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <InputGroupContainer title="Add Job" formData={addJobData} formFields={addJobs} >

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





