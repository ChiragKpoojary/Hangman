interface WinOrLossProp {
    word: string,
    guessedLetter: string[],
    wrongguess: number
  }
  
  function WinOrLoss({ word, guessedLetter, wrongguess }: WinOrLossProp) {
    const isWinner = word.split('').every(letter => guessedLetter.includes(letter));
    const isLoser = wrongguess >= 6; 
  
    return (
        <>
          {(isWinner || isLoser) && (
            <div className="h-60 w-72 bg-gray-100 rounded-md  border border-gray-100 absolute flex flex-col justify-center items-center">
              {isWinner ? (
                <h1 className="text-green-500 text-5xl mb-4">You Won!!</h1>
              ) : (
                <div>
                <h1 className="text-red-500 text-5xl mb-4">Nice Try!!</h1>
                <h1 className="text-5xl flex justify-center text-slate-800">{word}</h1>
                </div>
              )}
              <button className="bg-slate-950 w-32 h-14 rounded-2xl text-white mt-4" onClick={()=>window.location.reload()}>Try again</button>
            </div>
          )}
        </>
      )
  }
  
  export default WinOrLoss;