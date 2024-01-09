import { CardContainer } from "../../components";
import customFetch from "../../utils/axios";


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
    throw error 
  }
}


export default function Stats(){
  return(
    <div style={{padding: "30px 50px", display:"flex", justifyContent:"center" }}>
      <CardContainer />
    </div>
  )
}