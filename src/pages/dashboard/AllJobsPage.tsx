
import { InputGroupContainer } from "../../components";
import JobCardContainer from "../../components/jobCardContainer";
import customFetch from "../../utils/axios";
import {  allJobsFormData } from "../../utils/links";
import { JobCardType } from "../../components/JobCard";
import { useNavigate, useLoaderData, useLocation, LoaderFunction } from 'react-router-dom';
import {toast} from "react-toastify"

interface AllJobsType{
  search?:string
  sort?: string
  status?:string
  type?:string
  page?:string
}

interface AllJobsResponseType{
  jobs: JobCardType[]
  totalJobs: number
  numOfPages: number
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  
  const status = url.searchParams.get("status");
  const jobType = url.searchParams.get("jobType");
  const sort = url.searchParams.get("sort");
  const page = url.searchParams.get("page");
  const search = url.searchParams.get("search");
  
  try{
    const resp = await customFetch.get<{data:AllJobsResponseType}>(
      `/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}&search=${search}`
    )
    const allJobs = resp.data
    return allJobs
    
  }catch(err){
    toast.error("error while searching data")
  }
}

export default function AllJobs(){
  const { jobs, totalJobs, numOfPages } = useLoaderData() as AllJobsResponseType;
  const navigate = useNavigate();
  let location = useLocation();
  
  const searchJobData = async(values:AllJobsType)=>{
    const currentURL =`${location.pathname}`
    navigate(
      `${currentURL}?status=${values.status}&jobType=${values.type}&sort=${values.sort}&page=${values.page?values.page:"1"}&search=${values.search}`
    );
  }
  
  
  
  return(
    <div style={{padding: "30px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <InputGroupContainer title="Search Form"  formData={searchJobData} formFields={allJobsFormData} >
          <button style={{marginTop: "33px"}} className="btn btn-danger" type="submit">Submit</button>
        </InputGroupContainer>

        
        <JobCardContainer jobDescriptionArr={jobs} countJobs={jobs.length}/>
    </div>
  ) 
}

