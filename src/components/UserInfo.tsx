import React, {useState} from "react";
import {PiUserCircleFill} from "react-icons/pi";
import {BsFillCaretDownFill} from "react-icons/bs";



import Wrapper from "../assets/wrappers/UserInfo";


export default function UserInfo(){
  const [openLogout, setOpenLogout] = useState(false)
  return(
    <Wrapper>
      <button onClick={()=>setOpenLogout(!openLogout)} className="btn"> 
        <div  className="info-wraper">
          <PiUserCircleFill/>
          <p className="">Test User</p>
          <BsFillCaretDownFill/>
        </div >

        <div className={`logout-btn`} style={{display: openLogout? "block" : "none"}}>
          <p>Logout</p>
        </div>
       
      </button>
    </Wrapper>
    
    
  )
}