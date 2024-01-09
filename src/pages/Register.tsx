import  {  useState} from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from '../components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../redux store/store";
import { registerUser, loginUser } from "../redux store/userslice/userThunk";
import { loginFields, registerFields } from "../utils/links";
import { SigninForm } from "../components/LoginForms";
import { registerUserType } from "../redux store/reduxTypes";




export default function Register(){
 
  const [isMember, setIsMember] = useState(false)
  const dispatch = useDispatch() as AppDispatch
  const navigate = useNavigate();
 
  const getFormSubmittedData = async (submittedData: registerUserType)=>{
    isMember? await dispatch(loginUser(submittedData)) : 
    await dispatch(registerUser(submittedData))
    navigate("/alljobs");
    
  }
  return (
   <Wrapper className="full-page">
    
    <div className=" form forma" >
      <Logo/>
      <h3>{isMember? "Login": "Register"}</h3>
      {isMember && <SigninForm formFields={loginFields} submittedData={getFormSubmittedData}/> }
      {!isMember && <SigninForm formFields={registerFields} submittedData={getFormSubmittedData}/> }
      
      {!isMember && <p>Already a member? <span onClick={()=>setIsMember(!isMember)}>Login</span></p>}
      {isMember && <p>Not a member yet? <span  onClick={()=>setIsMember(!isMember)}>Register</span></p>}
      
    </div>
    
   </Wrapper>
  );

}