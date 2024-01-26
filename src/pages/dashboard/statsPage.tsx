import { CardContainer, BarChart } from "../../components";
import customFetch from "../../utils/axios";
import { useLoaderData } from "react-router-dom";
import {toast} from "react-toastify"

export interface JobStatstype{
  defaultStats:{
    pending:string 
    interview:string 
    declined:string 

  }
  monthlyApplications:{
    date: string
    count: number
  }[]
}

export async function loader() {
  try {
    const resp = await customFetch.get<{data:JobStatstype}>('/jobs/stats');
    return resp.data;
  } catch (error: unknown) {
    toast.error("error getting data")
  }
}


export default function Stats(){
  const {monthlyApplications } = useLoaderData() as JobStatstype;

  return(
    <div style={{padding: "30px 50px",maxWidth:"100%"}}>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <CardContainer />
      </div>
      <div style={{width:"100%",textAlign:"center"}}>
        <p style={{margin:"30px 0 0 0px", fontSize:"30px", }}>Monthly Application</p>
        <p style={{margin:"auto",  fontSize:"20px", color:"blue"}}>Area Chart</p>
      </div>
      

      <BarChart data={monthlyApplications}/>
    </div>
   


  )
}