import styled from "styled-components";

const Wrapper = styled.main`
  display:flex;
  .navlist{
    width: 260px;
    display: none;
  }
  .dashboard-mainsection{
    flex-grow:1;
  }

  @media screen and (min-width: 992px){
    .navlist{
      display: block
    }
  }


`

export default Wrapper 