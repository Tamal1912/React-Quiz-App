import React from 'react'
import questions from '../assets/data'

const Result = ({activeQs,totalScore}) => {
  return (
    <>
    <div 
    className="quiz-details mb-3 lg:w-52 lg:h-36 lg:mb-2 md:w-44 md:h-36 md:mt-3 sm:w-28 
       sm:h-36 sm:mb-4 content-center font-sans mt-14 border-none
      rounded-xl  text-white text-center ">
          <h1 className='lg:text-2xl md:text-xl sm:text-sm '>

          {(questions.length - activeQs - 1) === 0 ? <>Last Attempt</>:
          <>Attempt left : {(questions.length) - activeQs - 1 }</>}</h1>

          <h2>Results</h2>

          <h2>Score is : {totalScore}</h2>

           <h3>
            {totalScore} out of {questions.length} correct - {((totalScore)/questions.length)*100}%
           </h3>
        </div>
    </>
  )
}

export default Result