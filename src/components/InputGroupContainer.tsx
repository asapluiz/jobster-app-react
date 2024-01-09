import  { ReactNode} from "react";
import Wrapper from "../assets/wrappers/InputGroupContainer";
import { Formik, Form } from 'formik';
import { InputTextField, MySelect } from "./FormRow";

interface formfieldsType{
  id: string;
  label: string;
  name: string;
  type: string;
  value:string;
  option?: Record<string, string>[] ;
}

export default function InputGroupContainer(
    {children, formFields, title, formData}:
    {title:string, formData:Function, children:ReactNode ,formFields:formfieldsType[]}
  ){
  
  const initialValues = ()=>{
    let values: Record<string, string> = {}
    formFields.forEach((value)=>{
      values[value.name] = value.value
    })

    return values
  }

  const clearFields = ()=>{
    
  }
  
  const sendSearchJobData = (data: Record<string, string>)=>{
    formData(data)
  }
  
  return(
    <Wrapper className="form">
      
      <h4>{title}</h4>
      <Formik
          initialValues= {
            initialValues()
          }
          
          onSubmit={(values, { setSubmitting }) => {
            sendSearchJobData(values)
            setSubmitting(false)
            console.log(values)
          }}
        >
          {(formikProps) => (
          <Form className="form-fields-group">
            {formFields.map((field)=>{
              if(field.type === "text"){
                return ( 
                <InputTextField
                  key={field.id}
                  id={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                />
              )}else{
                return (
                <MySelect label={field.label} name={field.name} id={field.name} key={field.id}>
                  {field.option!.map((option)=>(
                    <option key={option.value} value={option.value}>{option.text}</option>
                  ))}
                </MySelect>
              )}
            })}
            
            {children}
            {/* <button type="button" onClick={() => formikProps.resetForm()}>
            Reset
          </button> */}
            
          </Form>
        )}
        </Formik>
      
    </Wrapper>
  );
}