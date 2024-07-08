


interface TestComponentprops{
  word:string
   guessedLetter:string[]
}


function TestComponent({word,guessedLetter}:TestComponentprops) {

    return (
      <div className="absolute bottom-52 lg:bottom-[14.5rem] xl:bottom-[16rem] ">
        <h1 className="text-xl md:text-3xl">Guess The Programing Language</h1>
     <div className="flex gap-1  text-5xl justify-center items-center">
    
        {
          word.split("").map((item,index)=>(
<span key={index} className="border-b-4 border-black">
<span className={guessedLetter.includes(item)?"visible":"invisible"}>
  {item}
</span>

</span>
          ))
        }
     </div>
     </div>
    );
  }
  
  export default TestComponent;