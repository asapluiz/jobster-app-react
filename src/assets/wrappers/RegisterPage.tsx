import styled from "styled-components";

const Wrapper = styled.main`
  display:flex;
  justify-content: center;
  align-items:center;
  
  form{
    max-width:400px;

    border-top: 5px solid var(--primary-500);
    img{
      display:block;
      margin-left: auto;
      margin-right:auto;
    }

    h3{
      text-align:center;
      margin-top:20px;
    }

    button{
      width:100%;
      margin-top: 15px;
    }
    
    p{
      margin-top: 15px;
      text-align: center;
      font-size: 16px;
      span{
        color: var(--primary-500);
        cursor: pointer;
      }
    }
    
    
  }
 

`

export default Wrapper 