import React, {ChangeEventHandler} from "react";

interface inputFieldType{
  labelText:string;
  type:string;
  name:string;
  value:string;
  handleChange?:ChangeEventHandler<HTMLInputElement> 
  handleSelectChange?:ChangeEventHandler<HTMLSelectElement>;
  options?: {id:string | number, value:string, text:string}[]
}

export default function FormRow({labelText, type, name, value, options, handleChange, handleSelectChange}:inputFieldType){
  return(
    <div className='form-row'>
      <label htmlFor="name" className="form-label">
        {labelText || name }
      </label>
      
      {
        type === "select"?
        <select  value={value} name={name} className="form-input" onChange={handleSelectChange}>
          {
            options?.map((item)=>(
              <option key={item.id} value={item.value} >{item.text}</option>
            ))
          }
        </select> 
        :
        <input className="form-input"
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
        
      }
      
    </div>
  )
}