import React from "react";
import Wrapper from "../assets/wrappers/Navlist";
import Logo from "./Logo";
import links from "../utils/links";
import { Link } from "react-router-dom";



export default function Navlist(){
  return (
    <Wrapper className="navlist">
      <div className="logo">
        <Logo/>
      </div>
      
      <ul className="link-group">
        {links.map((link)=>(
          <Link key={link.id} to={link.path} className="link-items">
            <div className="link-inner-item">
              <span>{link.icon}</span>
              <p>{link.text}</p>
            </div>
          </Link>
        ))}
      </ul>
    
    
    </Wrapper>
  )
}