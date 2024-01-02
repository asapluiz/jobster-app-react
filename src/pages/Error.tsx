import React from "react";
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';



import img from '../assets/images/not-found.svg';


function Error(){

  return(
    <Wrapper className='full-page'>
      <div >
        <img src={img} alt="Not Found"/>
        <h3>ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
     
    </Wrapper>
  )

}

export default Error