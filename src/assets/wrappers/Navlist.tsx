import styled from "styled-components";

const Wrapper = styled.section`
  padding: 20px 0 0 0px;
  background-color: var(--white);
  .logo{
    margin-left:24px;
  }
  .link-group{
    color: var(--grey-400);
    margin-top: 70px;
  }
  .link-items{
    padding-left: 45px;
    height:70px;
    display:flex;
    transition: translate 0.5s;
    color: var(--grey-400);
  }
  .link-items:hover{
    background-color: var(--grey-50);
    translate: 8px 0 ;
  }
  .link-items:active{
    color: none;
  }

  .link-inner-item{
    display: flex;
    align-items:center;

    span{
      margin-right:20px;
    }
    p{
      font-size:20px;
      margin:0;
      
    }
  }

  .link-icon{
    margin-top: 8px;
    width:25px;
    height:25px;
  }

  .active{
    color:blue;
  }

  .pending{
    color:red;
  }
`

export default Wrapper 