import { InputGroupContainer } from "../../components";
import { profileJobs } from "../../utils/links";
import { useSelector } from 'react-redux'
import customFetch from "../../utils/axios";

interface ReduxStateType{
  user:{
    isLoading: boolean
    user:{
      email: string
      lastName: string
      location:string
      name: string
      token : string
    }
  }
}

interface profileSubmitDataType{
  name:string 
  lastname:string 
  email:string
  location:string
}
export default function Profile(){
  const user = useSelector((state:ReduxStateType) => state.user)
  const profileJobsValue = profileJobs.map(job => ({
    ...job,
    value: job.name === "name"?
      user.user.name :
      job.name === "lastname"?
      user.user.lastName:
      job.name === "email"?
      user.user.email:
      job.name === "location"?
      user.user.location: ""
  }));
  
  const profileData = (values:profileSubmitDataType)=>{
    console.log("samuel eto", values)

    customFetch.patch<>("/auth/updateUser", )
  }

  
  return(
    <div style={{padding: "0px 50px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
      <InputGroupContainer title="Profile" formData={profileData} formFields={profileJobsValue} >
        <button style={{marginTop: "33px", height:"40px"}} className="btn btn-hero" type="submit">Save Changes</button>
      </InputGroupContainer>
    </div>
  )
}