import React from "react";
import { Card, CardContainer } from "../../components";

import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';


export default function Stats(){
  return(
    <div style={{padding: "30px 50px", display:"flex", justifyContent:"center" }}>
      
      <CardContainer />
      {/* <Card number="30" icon={<FaSuitcaseRolling className="logo"/>} text="Interviews Scheduled" lightClor="--red-light" darkColor="--red-dark"/> */}
    </div>
  )
}