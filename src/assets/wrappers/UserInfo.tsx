import styled from "styled-components";

const Wrapper = styled.div`
  position:relative;
  .info-wraper{
    display:flex;
    align-items:center;
    justify-content:center;
    column-gap: 8px;


    p{
      margin: 0;
    }

  }

  .logout-btn{
    color: var(--primary-600);
    position:absolute;
    left:0;
    top:40px;
    background-color: var(--primary-100);
    width: 100%;
    height: 45px;
    border-radius:4px;
  }
`

export default Wrapper 