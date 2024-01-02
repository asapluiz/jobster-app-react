import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  padding: 20px 0;
  background-color: var(--white);
  border-radius:5px;

  .top-layer{
    padding: 0 20px 20px 20px;
    display: flex;
    align-item:center;
    gap: 20px;
    border-bottom: 1px solid var(--grey-200);

    h4,
    p{
      margin:0;
    }
  }
  .texts{
    p{
      color: var(--grey-400);
    }
  }

  .letter-box{
    background-color: var(--primary-500);
    width:60px;
    height: 60px;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 8px;
    
    p{
      margin: 0;
      color: var(--white);
      font-weight: 800;
      font-size: 30px;
    }
  }

  .bottom-layer{
    padding: 20px;
  }

  .icons-item-list{
    display:grid;
    grid-template-columns:1fr;
    gap:15px;
  }

  .label{
    background-color: var(--primary-700);
    width:100px;
    color: var(--white);
    padding: 5px 8px;
    text-align:center;
    border-radius:3px;
    
  }

  .buttons-label{
    display:grid;
    grid-template-columns:1fr ;
    margin-top: 13px;

    button{
      margin-right:10px;
    }
  }
  @media screen and (min-width: 600px){
    .icons-item-list{
      grid-template-columns:1fr 1fr;
    }

    .buttons-label{
      grid-template-columns:1fr 1fr;
    }
    
  }
  
`

export default Wrapper 