import styled from "styled-components";

const Wrapper = styled.div`
  width:100%;
  padding: 0px;

  

  display: grid;
  grid-template-columns: auto auto ;
   column-gap: 10px;
   row-gap: 10px;
  @media screen and (max-width: 764px){
    
    grid-template-columns: auto ;
  }


`

export default Wrapper;