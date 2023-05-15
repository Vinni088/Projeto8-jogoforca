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

  let [rights, setRT] = useState(0);
  let [wrongs, setWR] = useState(1);
  let [result, setResult] = useState('Adivinhando');
  let [restart, setRestart] = useState(false);
  /* Return */
  return (
    <div className='App'>
      <Jogo 
      index={index} /* Ok! */
      setIndex = {setIndex} /* Ok! */
      status1 = {status1} /* Ok! */
      setStatus1 = {setStatus1} /* Ok! */
      setWord = {setWord} /* Ok! */
      disabled_start_buttons = {disabled_start_buttons} /* Ok! */
      setDSB = {setDSB} /* Ok! */
      setDLB = {setDLB} /* Ok! */
      Guess_Status = {Guess_Status} /* Ok! */
      setGS = {setGS} /* Ok! */
      setLG = {setLG} /* Ok! */
      setRT = {setRT} /* Ok! */
      setWR = {setWR} /* Ok! */
      result = {result} /* Ok! */
      setResult = {setResult} /* Ok! */
      restart = {restart} /* Ok! */
      setRestart = {setRestart} /* Ok! */
      />

      <Letras 
      index={index} /* Ok! */
      setIndex = {setIndex} /* Ok! */
      setStatus1 = {setStatus1} /* Ok! */
      word = {word} /* Ok! */
      setDSB = {setDSB} /* Ok! */
      disabled_letter_buttons = {disabled_letter_buttons} /* Ok! */
      setDLB = {setDLB} /* Ok! */
      Guess_Status = {Guess_Status} /* Ok! */
      setGS = {setGS} /* Ok! */
      Letters_guessed = {Letters_guessed} /* Ok! */
      setLG = {setLG} /* Ok! */
      rights = {rights} /* Ok! */
      setRT = {setRT} /* Ok! */
      wrongs = {wrongs} /* Ok! */
      setWR = {setWR} /* Ok! */
      result = {result} /* Ok! */
      setResult = {setResult} /* Ok! */
      />
    </div>
  );
}
