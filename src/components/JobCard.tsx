
import Wrapper from "../assets/wrappers/JobCard";
import {  FaCalendarAlt  } from 'react-icons/fa';
import { BiSolidNavigation, BiSolidBriefcaseAlt2  } from "react-icons/bi";
import { format } from 'date-fns';
import clsx from 'clsx';
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utils/axios";
import useDelete from "./deleteHook";


export type JobCardType = {
  _id: string,
  company: string,
  position: string,
  status: string,
  jobType: string,
  jobLocation: string,
  createdAt: string,
}

const deleteItem = async (itemId:string) => {
  await customFetch.delete(`/jobs/${itemId}`)
};

export default function JobCard({jobdescription}:{jobdescription:JobCardType}){
  const { handleDelete, isLoading, error } = useDelete(deleteItem);
  const navigate = useNavigate();

    const onDeleteClick =  (itemId:string) => {
      handleDelete(itemId, () => {
        navigate('/alljobs?status=all&jobType=all&sort=latest&page=1&search=')
      });
    };

  
  
  return(
    <Wrapper>
      
      <div className="top-layer">
        <div className="letter-box">
          <p>{jobdescription.company.split("")[0]}</p>
        </div>
        <div className="texts">
          <h4>{jobdescription.position}</h4>
          <p>{jobdescription.company}</p>
        </div>
      </div>
      
      <div className="bottom-layer">
        <div className="icons-item-list" >
          <div className="icon-text"><BiSolidNavigation /> <h5>{jobdescription.jobLocation}</h5></div>
          <div className="icon-text"><FaCalendarAlt  /> <h5>{ format(new Date(jobdescription.createdAt), 'MMM do, yyyy')}</h5></div>
          <div className="icon-text"><BiSolidBriefcaseAlt2  /> <h5>{jobdescription.jobType}</h5></div>
          <div className={clsx({ 
              "job-status":true, 
              "job-status-decline":jobdescription.status === "declined", 
              "job-status-interview":jobdescription.status === "interview",
              "job-status-pending":jobdescription.status === "pending"
            })}> 
            {jobdescription.status.charAt(0).toUpperCase() + jobdescription.status.slice(1)}
          </div>
        </div>
        
        <div className="buttons-label">
          
          <div >
            <Link to={`/addjobs/${jobdescription._id}`}><button  className="btn btn-small-edit">Edit</button></Link>
            <button  className="btn btn-small-delete " onClick={()=>onDeleteClick(jobdescription._id)}>Delete</button>
          </div>
        </div>
      </div>
      
    </Wrapper>
  )
}