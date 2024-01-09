import React, {useState} from "react";
import {PiUserCircleFill} from "react-icons/pi";
import {BsFillCaretDownFill} from "react-icons/bs";
import { removeUserFromLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { RootStateType } from "../pages/ProtectedRoute";
import Wrapper from "../assets/wrappers/UserInfo";
import {  useSelector } from 'react-redux';


export default function UserInfo(){
  const [openLogout, setOpenLogout] = useState(false)
  const user = useSelector((state:RootStateType) => state.user.user)
  const navigate = useNavigate();
  
  const logoutUser = ()=>{
    removeUserFromLocalStorage()
    navigate("/register");
  }
  return(
    <Wrapper>
      <button onClick={()=>setOpenLogout(!openLogout)} className="btn"> 
        <div  className="info-wraper">
          <PiUserCircleFill/>
          <p className="">{user.name}</p>
          <BsFillCaretDownFill/>
        </div >

        <div className={`logout-btn`} style={{display: openLogout? "block" : "none"}}>
          <p onClick={logoutUser}>Logout</p>
        </div>
       
      </button>
    </Wrapper>
    
    
  )
}