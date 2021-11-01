import React, { useState, useEffect } from "react";
import cross from "../assets/images/cross.svg";

const TopMessage = (message, isAuthenticated) => {
  const [Open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!Open);
  };
  if(message != null)
  {
    return (
      <div className={
        Open
          ? "message-box inset-x-5%"
          : "hidden"
      }>
        <p className="py-3 text-sm ml-3 text-white w-80%">{message}</p>
        <img 
          src={cross} 
          className="absolute right-4 top-3 md:top-4 md:w-3%"
          onClick={toggle} 
        />
      </div>
    );
  }
  else{
    return(<></>);
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(TopMessage);