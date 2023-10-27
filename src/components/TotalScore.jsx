import React from 'react'
import styled from 'styled-components'
const TotalScore = ({total}) => {
  return (
    
        <ScoreContainer>
    <h1>{total}</h1> 
    <p>Total Score</p>
  </ScoreContainer>
  
  )
}

export default TotalScore

const ScoreContainer = styled.div`
/* background-color: re/d; */
max-width: 200px;
margin: 50px 50px;
    h1{
        line-height: 100px;
       
        font-size: 100px;
        font-weight: 500;
    }
    p{
        
        font-size: 24px;
        font-weight: 500;
    }
`;
