import { useState } from "react"
import styled from "styled-components"

const RollDice = ({showres,resetScore,number,generaterandom}) => {
    
  return (
    <DiceContainer>
        <div className = "dice" onClick={()=>generaterandom(1,7)}>
        <img src={`/images/dice_${number}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
        <button className="btn_1" onClick={resetScore}>Reset Score</button>
        <button className="btn_2" onClick={showres}>Show Rules</button>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   .dice{
    cursor:pointer;
   }
    p{
        font-size: 24px;
        font-weight: 500;
    }

    .btn_1{
        width:220px;
        height:44px;
        border-radius: 5px;
        background-color: white;
        color: black;
        padding: 10px 18px;
        gap:10px;
        border: 1px solid black;
        font-weight: 600;
        font-size: 16px;
        margin : 10px 0;
        cursor: pointer;
        transition: 0.6s ease-out;
    }

    .btn_2{
        width:220px;
        height:44px;
        border-radius: 5px;
        background-color: black;
        color: white;
        padding: 10px 18px;
        gap:10px;
        border: 1px solid black;
        font-weight: 600;
        font-size: 16px;
        margin : 10px 0;
        cursor: pointer;
        transition: 0.6s ease-out;
    }
    .btn_1:hover{
        background-color: black;
        color:white;
        transition: 0.4s ease-in;
    }
    .btn_2:hover{
        background-color: white;
        color:black;
        transition: 0.4s ease-in;
    }

`;