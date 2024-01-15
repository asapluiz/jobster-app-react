import Wrapper from "../assets/wrappers/jobCardContainer";
import JobCard from "./JobCard";

type JobCardType = {
  _id: string,
  company: string,
  position: string,
  status: string,
  jobType: string,
  jobLocation: string,
  // "createdBy": "6251efad2cfa7a2963501725",
  createdAt: string,
  // "updatedAt": "2021-12-27T03:20:35.000Z",
  // "__v": 0
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