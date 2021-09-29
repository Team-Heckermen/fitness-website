import React from "react";

export const Message = (props) => {
  if(props.message != null)
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
