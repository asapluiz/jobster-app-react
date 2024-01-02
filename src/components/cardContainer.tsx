
import React from "react";
import Wrapper from "../assets/wrappers/cardContainer";
import Card from "./card";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';


export default function CardContainer(){
  return(
      <Wrapper>
         <Card number="0" icon={<FaSuitcaseRolling style={{color:"green" }} className="logo"/>} text="Pending Applications" lightClor="--green-light" darkColor="--green-dark"/>
         <Card number="1" icon={<FaCalendarCheck style={{color:"blue" }} className="logo"/>} text="Interviews Scheduled" lightClor="--primary-300" darkColor="--primary-600"/>
         <Card number="30" icon={<FaBug style={{color:"red" }} className="logo"/>} text="Jobs Declined" lightClor="--red-light" darkColor="--red-dark"/>
      </Wrapper>
  )
}