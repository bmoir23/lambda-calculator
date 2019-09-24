import React, {useState} from "react";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import numbers from '../../../data'; 

//Import your array data to from the provided data file

const Numbers = (setDisplay) => {
  const [numberButtons] = useState(numbers.numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      
        {numberButtons.map(number => <NumberButton number ={number} key={number} setDisplay={setDisplay.setDisplay}/>)
      }
      
      
    </div>
  );
};

export default Numbers;