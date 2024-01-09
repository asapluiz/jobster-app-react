import styled from "styled-components";

const Wrapper = styled.div`
  width:100%;
  padding: 0px;
  

  display: grid;
  grid-template-columns: auto auto auto;
  column-gap:12px;
  @media screen and (max-width: 764px){
    
    grid-template-columns: auto ;
    row-gap: 20px;
  }

  @media screen and (min-width: 765px) and (max-width: 1200px){
    row-gap: 20px;
    grid-template-columns: auto auto;
  }

`

export default Wrapper;