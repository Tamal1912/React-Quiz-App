
import React, { useState } from "react";
import questions from "../assets/data"
import Result from "./Result";
import Userbuttons from "./Userbuttons";

const Quizbox = () => {
  
const [currentQs,setCurrentQs]=useState(0);
const [score,setScore]=useState(0);


let handleNextClick=()=>{
  
  if(questions.length < currentQs+1){
    setCurrentQs(0);
    setScore(0);
  }
  if(questions.length > currentQs+1){
  setCurrentQs(currentQs+1);
  }else{
    setCurrentQs(currentQs);
    alert("No Next Questions Left");
   
  }


  }

let handleOptionClicked=(isCorrect)=>{
 
  
  if(isCorrect){

    if((currentQs) < questions.length){
    alert("Score Increased , Keep Going")
    setScore(score+1); 
  }
  }else{
    alert("Noh, Wrong Answer, Check Next Question")

  }

  

}

  return (
    <>
      <div className="quiz-box border-none  rounded-lg bg-green-300 ">
        <div className="px-10 py-3">
          <h1 className=" text-black text-2xl font-serif">{currentQs+1}. {questions[currentQs].text}</h1>
          <ul className="text-black text-xl  ">
            {questions[currentQs].options.map(
              (option)=> <li onClick={()=>handleOptionClicked(option.isCorrect)} className="border-2 text-sm w-full h-12 mt-2 list-items bg-green-500 font-mono text-white rounded-lg hover:bg-yellow-400 hover:text-black"
               key={option.id}>{option.text}</li>
              )
              }
          </ul>
        </div>
         
         
        <Result activeQs={currentQs} totalScore={score}/>
        <Userbuttons activeQs={currentQs} handleNext={handleNextClick}/>
      </div>
    </>
  );
};

export default Quizbox;
