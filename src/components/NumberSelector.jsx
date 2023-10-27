import React, { useState } from 'react'
import styled from 'styled-components'
const NumberSelector = ({seterror,error,selectednum,setselectednum}) => {
    const arrayNum = [1,2,3,4,5,6];
    const numberselectorhandler = (val) =>{
        setselectednum(val);
        seterror("");
    }
    console.log(selectednum);
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
        {arrayNum.map((val,i)=>(
            <Box 
            isSelected = {
                val===selectednum
            }
            key={i}
            onClick={()=>numberselectorhandler(val)}
            >{val}</Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .error{
        color:red;
    }
    .flex{
        display:flex;
        gap:24px;
       }
       p{
        font-size: 24px;
        font-weight: 700;
        
       }
`;

const Box = styled.div`
/* margin: 15px; */
    height:72px;
    width:72px;
    /* background-color : white; */
    
    border: 1px solid black;
    /* text-align: center; */
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=>props.isSelected? "black":"white"};
    color: ${(props)=>props.isSelected? "white":"black"};

    `;
