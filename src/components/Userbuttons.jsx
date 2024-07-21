import React from 'react'
import questions from '../assets/data'

const Userbuttons = ({handleNext,activeQs,handleReset}) => {
   
  

  return (
    <>
    <div className="buttons relative lg:mr-5 lg:mt-5 md:mr-16 sm:mr-28 gap-3">
      <button className={`${activeQs+1 === questions.length? `btn btn-error`:`btn btn-primary text-white p-3`}`} onClick={handleNext}>Next</button>
      <button className="btn btn-warning p-3" onClick={handleReset}>Reset</button>
      
      </div>
    </>
  )
}

export default Userbuttons