import React from "react"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Landing(){

  return(
    <Link to='/register' className='btn btn-hero'>
      Login / Register
    </Link>
  )
}