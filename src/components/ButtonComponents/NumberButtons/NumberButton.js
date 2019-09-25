import React from "react";
// import './Numbers.css'
import './App.css';


const NumberButton = (setDisplay) => {

  const handleAddToEquation = () => {
    setDisplay.setDisplay(setDisplay.number);
  };

  if(setDisplay.number === '0'){
  return (
    <>
      {<button className='zero' onClick={handleAddToEquation}>{setDisplay.number}</button>}
    </>
  );
  }else{
   return(
   <>
    {<button className='numbers' onClick={handleAddToEquation}>{setDisplay.number}</button>}
    </>
  );

}
};
export default NumberButton; 