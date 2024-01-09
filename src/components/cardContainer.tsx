
import React from "react";
import Wrapper from "../assets/wrappers/cardContainer";
import Card from "./card";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { useLoaderData } from "react-router-dom";
import { JobStatstype } from "../pages/dashboard/statsPage";

export default function CardContainer(){
  const {defaultStats} = useLoaderData() as JobStatstype
  
  return(
      <Wrapper>
         <Card number={defaultStats.pending} icon={<FaSuitcaseRolling style={{color:"green" }} className="logo"/>} text="Pending Applications" lightClor="--green-light" darkColor="--green-dark"/>
         <Card number={defaultStats.interview} icon={<FaCalendarCheck style={{color:"blue" }} className="logo"/>} text="Interviews Scheduled" lightClor="--primary-300" darkColor="--primary-600"/>
         <Card number={defaultStats.declined} icon={<FaBug style={{color:"red" }} className="logo"/>} text="Jobs Declined" lightClor="--red-light" darkColor="--red-dark"/>
      </Wrapper>
  )
}