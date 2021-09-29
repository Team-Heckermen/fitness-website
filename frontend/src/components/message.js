import React from "react";
import cross from "../assets/images/cross.svg";

export const TopMessage = (props) => {
  var divstyle="bottom-10 pb-24 ml-5 fixed w-1/4 rounded-lg bg-blue-700"
  function hideMesage()
  {
    divstyle="hidden "+divstyle
  }
  if(props.message != null)
  {
    return (
      <div className={divstyle}>
        <p className="pt-3 text-sm ml-3 text-white">{props.message}</p>
        <button onClick={hideMesage}><img src={cross} /></button>
      </div>
    );
  }
  else
  {
    return(<></>);
  }
};
