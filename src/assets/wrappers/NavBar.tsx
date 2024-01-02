import styled from "styled-components";

const Wrapper = styled.nav`
 display:flex;
 justify-content: space-between;
 border-bottom: 1px solid var(--grey-200);
 align-items:center;
 padding: 20px 5%; 
 height: 95px;
 background-color: var(--white);
 .logo{
  width: 100px;
 }
 .toggleIcon{
  color: var(--primary-500);
  height: 30px;
  width: 30px;
 }
 h2{
  display:none;
 }

 @media screen and (min-width: 992px){
  .logo{
    display: none;
   }
   h2{
    display:block;
   }
 }



`

export default Wrapper 