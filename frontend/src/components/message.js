import React from "react";

export const Message = (props) => {
  var bgcolor = "w-full bg-green-600 "+props.bgcolor
  return (
    <div className={bgcolor}>
      <p className="py-1 border-black border-0.5 text-sm w-full text-center">{props.message}</p>
    </div>
  );
};
