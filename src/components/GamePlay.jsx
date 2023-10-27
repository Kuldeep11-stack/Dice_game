import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import ShowRule from './ShowRule'
const GamePlay = () => {
    const [show,setshow] = useState(false);
    const[total , setTotal] =useState(0);
    const [selectednum , setselectednum] = useState(1);
    const [number , setnumber] = useState(1);
    const [error,seterror] =useState("");
    const generaterandom = (min,max) =>{
        if(!selectednum){
            seterror("You must select a number");
            return;
        }
        seterror("");
        const randomnumber = Math.floor(Math.random()*(max-min)+min);
        setnumber(randomnumber);
       
        if(selectednum===randomnumber){
            setTotal((prev) => prev+ randomnumber);
        }else{
            setTotal((prev) => prev-2);
        }
        setselectednum(undefined);
    }

    const resetScore = () => {
        setTotal(0);
    }

    const showres = () => {
       setshow((prev) => !prev);
    }

  return (
    <MainContainer>
     
     <div className="top_section">
     <TotalScore total={total}/>
      <NumberSelector seterror={seterror} error={error} selectednum={selectednum} setselectednum={setselectednum}/>
     </div>
     <RollDice showres= {showres}resetScore={resetScore} number={number} generaterandom={generaterandom}/>
      {
        show &&  <ShowRule/>
      }
    </MainContainer>
    
  )
}

export default GamePlay
const MainContainer = styled.div`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 50px;
        /* background-color: red; */
    }
`;
// const Main = styled.main`
//    display :flex ;
//    align-items: center;
//    justify-content: space-between;
// `;
