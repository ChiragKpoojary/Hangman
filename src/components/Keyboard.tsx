import { useEffect, useState,useCallback } from "react";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"]
];

interface KeyboardProps {
  onkeypress(key: string): void;

  word: string;
  guessedLetter: string[];
  wrongguess: number;
}

function Keyboard({ onkeypress,word,guessedLetter,wrongguess }: KeyboardProps) {
  const isWinner = word.split('').every(letter => guessedLetter.includes(letter));
  const isLoser = wrongguess >= 6; 
  const [pressedKeys, setPressedKeys] = useState<{ [key: string]: boolean }>({});
  const[gameover,setgameover] = useState(false);
 

  
  const handleKeyPress = useCallback(async (key: string) => {
  
    if (!pressedKeys[key]) {
      await onkeypress(key);
      setPressedKeys(prev => ({ ...prev, [key]: true }));
    }
  }, [onkeypress, pressedKeys]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      handleKeyPress(key);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyPress]);

  const handleButtonClick = (key: string) => {
    if(isWinner||isLoser){
      setgameover(true);
          }
    handleKeyPress(key);
  };
  return (
    <div className="flex flex-col items-center gap-2 mt-[26rem] relative">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => handleButtonClick(key)}
             
              className={`w-[2rem] h-10 rounded bg-gray-200 flex items-center justify-center font-bold text-lg md:w-[4rem] xl:w-[6rem] ${pressedKeys[key] ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={pressedKeys[key]||gameover}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
