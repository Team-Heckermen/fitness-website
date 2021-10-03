import React, { useState, useEffect } from "react";
import cross from "../assets/images/cross.svg";

export const TopMessage = (props) => {
  const [Open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!Open);
  };

    return (
      <div className={
        Open
          ? "message-box inset-x-5%"
          : "hidden"
      }>
        <p className="py-3 text-sm ml-3 text-white w-80%">{props.message}</p>
        <img src={cross} className="absolute right-4 top-3 md:top-4 md:w-3%" onClick={toggle} />
      </div>
    );
};