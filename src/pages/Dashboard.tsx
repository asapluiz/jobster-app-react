
import { Outlet, useNavigation, } from "react-router-dom";

import { NavBar, Navlist } from "../components";
import Wrapper from "../assets/wrappers/DashboardPage";


export default function Dashboard(){
  const navigation = useNavigation();
  
  return(
    <Wrapper className="full-page"> 
      <Navlist/>
      <div className="dashboard-mainsection">
        <NavBar/>
        {
        navigation.state === "loading"?
        <div className="loader"> Loading....</div>:
        <Outlet />
      }
        
      </div>
     
    </Wrapper>
  );

}