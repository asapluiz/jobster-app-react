import React, {useState}  from "react";
import { InputGroupContainer, JobCard } from "../../components";
import FormRow from "../../components/FormRow";
import JobCardContainer from "../../components/jobCardContainer";
import { jobs, allJobsFormData } from "../../utils/links";





export default function AllJobs(){
  const[fields, setFields] = useState("")

  
  return(
    <div style={{padding: "30px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <InputGroupContainer title="Search Form"  formFields={allJobsFormData} >
          <button style={{marginTop: "33px"}} className="btn btn-danger" type="submit">Submit</button>
        </InputGroupContainer>
        
    

  
      <JobCardContainer jobDescriptionArr={jobs}/>
      
    </div>
  )
}

