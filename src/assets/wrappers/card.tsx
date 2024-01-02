import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px 10px 30px;
  background-color:var(--white);
  border-bottom: 5px solid;
  .logo{
    width:35px;
    height:35px;
  }

  .text{
    font-size: 20px;
    margin:8px 0px;
  }
  .top-item{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height: 90px;
    margin-top:20px;

    
    .number{
      margin: auto 0;
      font-weight: 600;
      font-size: 60px;
      align-self:baseline;
    }
  }
  .icon-div{
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;
    background-color: red;
    width: 80px;
    height:70px;
  }
`

export default Wrapper;