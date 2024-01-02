import React, {useState, ReactNode} from "react";
import Wrapper from "../assets/wrappers/InputGroupContainer";


export default function InputGroupContainer({children}:{children:ReactNode}){
  
  return(
    <Wrapper className="form">
      
      <h4>Search Form</h4>
      <div className="form-fields-group">
        {children}

      </div>
      
    </Wrapper>
  );
}