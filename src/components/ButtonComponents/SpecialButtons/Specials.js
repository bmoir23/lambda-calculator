import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import specialButtons from "../../../data";


//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
const [specials] = useState(specialButtons.specials);
  return (
    <div>
      {specials.map(special => <SpecialButton props={special} key={special} setDisplayZero={props.setDisplayZero} setDisplay={props.SetDisplay}/>)}
    </div>
  );
};

export default Specials;
/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/