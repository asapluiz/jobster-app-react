import React, { FormEvent, ChangeEvent, useState, } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from "../redux store/store";
import { registerUser, loginUser } from "../redux store/userslice/userThunk";

  


export default function Register(){
  const [btnDiabled, setBtnDisabled] = useState(false)
  const [values, setvalues] = useState({
    email: "sam@gmail.com",
    password: "",
    name: "",
    isMember:false
  })

  const dispatch = useDispatch() as AppDispatch


  const submitForm = async(): Promise<void>=>{
    console.log("viki")
    const data = await dispatch(loginUser({
      email: values.email, 
      password:values.password,
      
    }))

      console.log(data)
  }

  const setFormField =(e:ChangeEvent<HTMLInputElement>, name:string)=>{
    setvalues((prev)=>({
      ...prev, [name]: e.target.value
    }))
  }
  
  const switchMember = ()=>{
    setvalues((prev)=>({
      ...prev, isMember: !prev.isMember
    }))
  }
  const handleSubmitForm = (e:FormEvent<HTMLFormElement>)=>{
    setBtnDisabled(!btnDiabled)
    e.preventDefault();
    console.log("i was submitted")
  }
 
  return (
   <Wrapper className="full-page">
    

    <form className="form" onSubmit={handleSubmitForm}>
      <Logo/>
      <h3>{values.isMember? "Login": "Register"}</h3>
      
      
      {
        !values.isMember &&
        <FormRow 
          name="name"
          labelText="Name"
          type="input"
          value={values.name}
          handleChange={(e)=>setFormField(e, "name")}
        />
        
      }
      <FormRow 
        name="email"
        labelText="Email"
        type="email"
        value={values.email}
        handleChange={(e)=>setFormField(e, "email")}
      />

      <FormRow 
        name="password"
        labelText="Password"
        type="password"
        value={values.password}
        handleChange={(e)=>setFormField(e, "password")}
      />

      <button type="submit" disabled={btnDiabled} onClick={submitForm} className="button btn">Submit</button>
      <button type="submit" disabled={btnDiabled} className=" button btn btn-hipster">Demo App</button>
      
      {!values.isMember && <p>Already a member? <span onClick={switchMember}>Login</span></p>}
      {values.isMember && <p>Not a member yet? <span  onClick={switchMember}>Register</span></p>}
      
    </form>
    
   </Wrapper>
  );

}