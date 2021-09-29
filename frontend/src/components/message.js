import React from "react";

export const Message = (props) => {
  if(props.message != null)
  {
    var message_bol = true
  }
  else{
    var message_bol = false
  }
  if(message_bol)
  {
    return (
      <div className="mx-auto w-95% rounded-md bg-blue-400">
        <p className=" rounded-md py-0.5 text-sm w-full text-center">{props.message}</p>
      </div>
    );
  }
  else
  {
    return(<></>);
  }
};
