import styled from "styled-components"
import StartGame from "./components/StartGame";
import './App.css'
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
   const [gameplay ,setgameplay] = useState(false);

   const togglegameplay = () =>{
    setgameplay((prev) => !prev)
   }

  return (
    <>
    {gameplay ? <GamePlay/> : <StartGame toggle={togglegameplay}/> }
    </>
  )
}

export default App

const Button = styled.button `
  background-color: black;
  color: white;
  padding: 10px;
`;