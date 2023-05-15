import React from 'react';
import "../CSS/Reset.css";
import "../CSS/Style.css";
import Jogo from "./Jogo.js";
import Letras from "./Letras.js";
import status from "./status.js";
import { useState } from "react";

export default function App() {
  /*Variaveis de estado:*/
  
  let [index, setIndex] = useState(0);
  let [status1, setStatus1] = useState(status[index]);
  let [word, setWord] = useState('')

  let [disabled_start_buttons, setDSB] = useState(false);
  let [disabled_letter_buttons, setDLB] = useState(true);

  let [Guess_Status, setGS] = useState([]);
  let [Letters_guessed, setLG] = useState([]);

  let [rights, setRT] = useState(1);
  let [wrongs, setWR] = useState(1);
  let [result, setResult] = useState('Adivinhando');
  let [restart, setRestart] = useState(false);
  /* Return */
  return (
    <div className='App'>
      <Jogo 
      index={index}
      setIndex = {setIndex}
      status1 = {status1}
      setStatus1 = {setStatus1}
      word = {word}
      setWord = {setWord}
      disabled_start_buttons = {disabled_start_buttons}
      setDSB = {setDSB}
      disabled_letter_buttons = {disabled_letter_buttons}
      setDLB = {setDLB}
      Guess_Status = {Guess_Status}
      setGS = {setGS}
      Letters_guessed={Letters_guessed}
      setLG = {setLG}
      rights = {rights}
      setRT = {setRT}
      wrongs = {wrongs}
      setWR = {setWR}
      result = {result}
      setResult = {setResult}
      restart = {restart}
      setRestart = {setRestart}
      />

      <Letras 
      index={index}
      setIndex = {setIndex}
      status1 = {status1}
      setStatus1 = {setStatus1}
      word = {word}
      setWord = {setWord}
      disabled_start_buttons = {disabled_start_buttons}
      setDSB = {setDSB}
      disabled_letter_buttons = {disabled_letter_buttons}
      setDLB = {setDLB}
      Guess_Status = {Guess_Status}
      setGS = {setGS}
      Letters_guessed={Letters_guessed}
      setLG = {setLG}
      rights = {rights}
      setRT = {setRT}
      wrongs = {wrongs}
      setWR = {setWR}
      result = {result}
      setResult = {setResult}
      />
    </div>
  );
}
