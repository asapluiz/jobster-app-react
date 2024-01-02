import React, {useState}  from "react";
import { InputGroupContainer, JobCard } from "../../components";
import FormRow from "../../components/FormRow";
import JobCardContainer from "../../components/jobCardContainer";
import { jobs } from "../../utils/links";



export default function AllJobs(){
  const[fields, setFields] = useState("")

  
  return(
    <div style={{padding: "30px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
       <InputGroupContainer>
         <FormRow
          name="name"
          labelText="Name"
          type="text"
          value={fields}
          handleChange={ ()=>null}
          options={[{id:1, text:"volvo", value:"volvo"}, {id:2, text:"benz", value:"benz"} ]}
        />
        <FormRow
          name="name"
          labelText="Name"
          type="select"
          value={fields}
          handleSelectChange={(e)=>{console.log("sae", e.target.value);  setFields(e.target.value)}}
          options={[{id:1, text:"volvo", value:"volvo"}, {id:2, text:"benz", value:"benz"} ]}
        />

        <FormRow
          name="name"
          labelText="Name"
          type="select"
          value={fields}
          handleSelectChange={(e)=>{console.log("sae", e.target.value);  setFields(e.target.value)}}
          options={[{id:1, text:"volvo", value:"volvo"}, {id:2, text:"benz", value:"benz"} ]}
        />

        <FormRow
          name="name"
          labelText="Name"
          type="select"
          value={fields}
          handleSelectChange={(e)=>{console.log("sae", e.target.value);  setFields(e.target.value)}}
          options={[{id:1, text:"volvo", value:"volvo"}, {id:2, text:"benz", value:"benz"} ]}
        />

        <button className="btn btn-danger">Clear Filters</button>
      </InputGroupContainer>

  
      <JobCardContainer jobDescriptionArr={jobs}/>
      
    </div>
  )
}