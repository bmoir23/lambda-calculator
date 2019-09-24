import React from "react";

const SpecialButton = (props) => {

  const zeroDisplay = () => {
    props.setDisplayZero('0');
  };

  const handleSetDisplay = () => {
    props.setDisplay(props.props);
  };

  if(props.props === 'C'){
  return (
    <>
      {<button className='specials' onClick={zeroDisplay}>{props.props}</button>}
      </>
  );
  }else{
      return(
        <>
          {<button className='specials' onClick={handleSetDisplay}>{props.props}</button>}
        </>
      )
  }
};

export default SpecialButton;