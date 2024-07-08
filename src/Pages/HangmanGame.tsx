import Keyboard from "../components/Keyboard"
import HangmanBody from "../components/HangmanBody"
import { useState,useEffect } from "react"
import {programmingLanguages} from "../components/Programing"
import TestComponent from "../components/EnterWord"
import WinOrLoss from "../components/WinOrLoss"


function Hangman() {
  const [word,SetWord] =useState("");

    const[guessedLetter,SetguessedLetter]=useState<string[]>([]);
    const [wrongguess,Setwrongguess] =useState (0);
    function getLanguage(){
      const index= Math.floor(Math.random()*programmingLanguages.length);
      return programmingLanguages[index].toUpperCase();
    }
    useEffect(() => {
      SetWord(getLanguage());
  
    }, []);

    function checkCorrectPress(key: string){
        if(!guessedLetter.includes(key)){
            if( word.includes(key)){
                SetguessedLetter(prev=> [...prev,key]);
            }else{
                Setwrongguess(wrongguess+1);
            }
        }
       
    }


  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
     <HangmanBody numberOfGuesses={wrongguess} />
     <TestComponent word={word} guessedLetter={guessedLetter}/>
     <Keyboard onkeypress={checkCorrectPress} word={word}  guessedLetter={guessedLetter} wrongguess={wrongguess}/>
     <WinOrLoss word={word} guessedLetter={guessedLetter} wrongguess={wrongguess}/>
    </div>
  )
}

export default Hangman;