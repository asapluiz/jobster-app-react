import React from "react";
import { InputGroupContainer } from "../../components";
import { profileJobs } from "../../utils/links";

export default function Profile(){

  const profileData = ()=>{
    console.log("samuel eto")
  }
  return(
    <div style={{padding: "0px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
    <InputGroupContainer title="Profile" formData={profileData} formFields={profileJobs} >

      <button style={{marginTop: "33px", height:"40px"}} className="btn btn-hero" type="submit">Save Changes</button>
      
      
    </InputGroupContainer>
    

  
</div>
  )
}