import React from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from "../assets/wrappers/NavBar";
import { UserInfo, Logo } from ".";



export default function NavBar(){


  return(
    <Wrapper>
      <FaAlignLeft className="toggleIcon"/>
      <Logo/>
      <h2 >Dashboard</h2>
      <UserInfo/>
    </Wrapper>
  )
}