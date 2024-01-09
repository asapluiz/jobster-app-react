import React, {ChangeEventHandler,ReactElement} from "react";
import { Formik, Form, useField } from 'formik';

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

interface InputTextFieldProps {
  label: string;
  id: string;
  name: string;
  type: string; 
}
interface SelectFieldProps {
  children:  ReactElement | ReactElement[];
  label: string;
  id: string;
  name: string;
  // type: string; 
}

export function InputTextField({ label, ...props }:InputTextFieldProps){
  const [field, meta] = useField(props);
   return (
     <div className='form-row'>
       <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
       <input className="form-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
}

export const MySelect = ({ label, ...props }:SelectFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
      <select className="form-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};