import React from "react";
import { InputGroupContainer } from "../../components";
import {  addJobs } from "../../utils/links";


export default function AddJobs(){
  return(
    <div style={{padding: "0px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <InputGroupContainer title="Add Job" formFields={addJobs} >

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