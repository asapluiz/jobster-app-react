import React from "react";
import { Outlet } from "react-router-dom";

import { NavBar, Navlist } from "../components";
import Wrapper from "../assets/wrappers/DashboardPage";



export default function Dashboard(){
  return(
    <Wrapper className="full-page"> 
      <Navlist/>
      <div className="dashboard-mainsection">
        <NavBar/>
        <Outlet />
      </div>
     
    </Wrapper>
  );

}