import Wrapper from "../assets/wrappers/jobCardContainer";
import JobCard from "./JobCard";

type JobCardType = {
  _id: string,
  company: string,
  position: string,
  status: string,
  jobType: string,
  jobLocation: string,
  createdAt: string,
}

export default function JobCardContainer({jobDescriptionArr, countJobs}:{countJobs:number, jobDescriptionArr: JobCardType[]}){

  return(
    <>
      {
        !countJobs?
        <div style={{fontWeight: "600", fontSize: "40px"}}>No jobs to display...</div> :
        <div>
          <p className="alljobs-divider">{countJobs} Jobs Found</p>
          <Wrapper>
            {jobDescriptionArr.map((jobDescription)=>(
              <JobCard key={jobDescription._id} jobdescription={jobDescription} />
            ))}
          </Wrapper>
        </div>
      }
    </>
    
   
  )
}