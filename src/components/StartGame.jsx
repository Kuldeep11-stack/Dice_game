import React from 'react'
import styled from 'styled-components'
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
    <img src="/images/homepage_dice.png" alt="" />
    </div>
        <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  /* justify-content: center;  */
  margin: 0 auto;
  height: 100vh;

  .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
  }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    min-width: 220px;
    height: 44px;
    padding: 10px 18px;
    gap: 10px;
    border-radius: 5px;
    border:none;
   cursor: pointer;
   font-size: 16px;
   transition: 0.6s background ease-out;

   &:hover{
      background-color: #3f3c3c;
      transition: 0.3s background ease-in;

   }

`;

