

function Head(): JSX.Element{
  return(  <div className='h-16 w-16 bg-black rounded-full absolute top-[10%] left-[63%] '>
    </div>
  )
}
function Body(): JSX.Element{
    return(  <div className='h-[32%] w-16 bg-black rounded-full absolute top-[26%] left-[63%] '>
      </div>
    )
  }

  function LeftLeg(): JSX.Element {
    return(  <div className='h-24 w-4 bg-black rounded-full absolute top-[50%] left-[79%] sm:left-[76%] md:left-[74%]   -rotate-180'>
        </div>
      )
   }
  
  function LeftArm(): JSX.Element {
    return (
      <div className='h-24 w-4 bg-black rounded-full absolute top-[15.4%] rotate-45 left-[90%] sm:left-[86%] md:left-[83%]'>
      </div>
    )
  }
  function RightArm(): JSX.Element{
    return(  <div className='h-24 w-4 bg-black rounded-full absolute top-[15.4%] right-[40%] -rotate-45'>
      </div>
    )
 }
 function RightLeg(): JSX.Element{
    return(  <div className='h-24 w-4 bg-black rounded-full absolute top-[50%] left-[67%] -rotate-180'>
      </div>
    )
 }
 interface HangmanBodyProps {
  numberOfGuesses: number;
}

function HangmanBody({ numberOfGuesses }: HangmanBodyProps) {
  return (
    <div className="absolute w-full flex items-center justify-center top-10">
     <div className="relative w-64 h-80 sm:w-80 sm:h-112 md:w-96 md:h-128">
      
       {numberOfGuesses >0 &&<Head/>}
        {numberOfGuesses  >1 &&<Body/>}
        {numberOfGuesses  >2 &&<LeftArm/>}
        {numberOfGuesses  >3 &&<RightArm/>}
        {numberOfGuesses  >4 &&<RightLeg/>}
        {numberOfGuesses  >5 &&<LeftLeg/>}
      


        <div className="absolute w-[5%] h-[15%] bg-black top-0 left-[75%] -translate-x-1/2 md:left-[71.9%]" />
        <div className="absolute w-full  h-[5%] bg-black bottom-0 left-[2%]" />
        <div className="absolute w-[5%] h-full bg-black left-1/4" />
        <div className="absolute w-[50%]  h-[5%] bg-black top-0 right-1/4" />
    </div>
    </div>
  )
}

export default HangmanBody