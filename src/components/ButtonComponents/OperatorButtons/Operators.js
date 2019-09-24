
 /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       // STEP 2 - add the imported data to state


import React, {useState} from "react";
import OperatorButton from '../OperatorButtons';
import operators from '../../../data';

const Operators = (setDisplay) => {
  const [oper] = useState(operators.operators);
  return (
    <div>
      {oper.map(operator => <OperatorButton props={operator} key={operator.char} setDisplay={setDisplay.setDisplay} setResult={setDisplay.setResult}/>)}
    </div>
  );
};

export default Operators;