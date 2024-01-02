import React from "react";
import Wrapper from "../assets/wrappers/card";
import { ImProfile } from 'react-icons/im';

interface cardType{
  number:string;
  icon:JSX.Element;
  text:string;
  lightClor:string;
  darkColor: string;
}

export default function Card({number, icon, text, lightClor, darkColor}:cardType){
  return(
    <Wrapper style={{borderColor:`var(${darkColor})`}}>
      <div className="top-item">
        <h1 className="number" style={{color:`var(${darkColor})`}}>{number}</h1>
        <div className="icon-div" style={{backgroundColor:`var(${lightClor})`}}> {icon} </div>
      </div>
      <p className="text">{text}</p>
    </Wrapper>
  );
}