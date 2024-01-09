import {  useState } from "react";
import { Formik, Form} from 'formik';

import { InputTextField } from "./FormRow";


interface LoginFormfieldsType{
  id: string;
  label: string;
  name: string;
  type: string;
  value:string;
  option?: Record<string, string>[] ;
}
export function SigninForm({formFields,submittedData}:{submittedData:Function, formFields:LoginFormfieldsType[]}){
  const [btnDiabled, setBtnDisabled] = useState(false)
  const initialValues = ()=>{
    let values: Record<string, string> = {}
    formFields.forEach((value)=>{
      values[value.name] = value.value
    })
    return values
  }

  const sendDataToParent = (data:Record<string, string>)=>{
    submittedData(data)
    
  }
  return (
    <div>
      <Formik
            initialValues= {
              initialValues()
            }
            
            onSubmit={(values, { setSubmitting }) => {
              
              sendDataToParent(values)
              setSubmitting(false)
            }}
          >
            <Form className="">
              {formFields.map((field)=>{
                  return ( 
                    <InputTextField
                      key={field.id}
                      id={field.name}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                    />
                )
              })}
              
              <button type="submit" disabled={btnDiabled}  className="button btn">Submit</button>
              <button type="submit" disabled={btnDiabled} className=" button btn btn-hipster">Demo App</button>
              
            </Form>
        </Formik>
    </div>
    
  )
}
