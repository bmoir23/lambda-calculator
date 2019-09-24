import React from "react";
import './Operators.css';

const OperatorButton = (props) => {
  const handleAddToEquation = () => {
    props.setDisplay(props.props.value);
  };

  const addResultToDisplay = () =>{
    props.setResult();
  }

  if(props.props.value === '='){
    return (
      <>
      {<button className='operators' onClick={addResultToDisplay}>{props.props.char}</button>}
      </>
      
    );
  }else{
    return (
      <>
        {<button className='operators' onClick={handleAddToEquation}>{props.props.char}</button>}
    </>
    );
  }
  };
export default OperatorButton; 

