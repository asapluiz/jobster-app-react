import styled from "styled-components";

const Wrapper = styled.div`

  background-color: var(--white);
  width: 100%;
  max-width: 100%;
 

  .form-fields-group{
    display:grid;
    grid-template-columns: 1fr ;
    column-gap: 30px;

  }


  @media screen and (min-width: 992px ){
    .form-fields-group{
      grid-template-columns: 1fr 1fr 1fr;
  
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .form-fields-group {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default Wrapper;