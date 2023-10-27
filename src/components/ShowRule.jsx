import React from 'react'
import styled from 'styled-components'
const ShowRule = () => {
  return (
    <Rule>
    <div>
        
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </div>
    </Rule>
  )
}

export default ShowRule

const Rule = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   div{
     background-color :#FBF1F1 ;
     padding : 20px
   }
   div h1{
    text-align: center;
    margin: 5px auto;
   }
   div p{
    font-size: 16px;
    font-weight: 500;
   }

`;
