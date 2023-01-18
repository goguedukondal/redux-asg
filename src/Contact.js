
import React from "react";
import { useSelector } from "react-redux"
import Button from "./Button";

const Contact = () => {
    const isLight = useSelector(state=>state.changer)
  return (
      <div className={isLight==="true"?"Light":"Dark"}>
      <Button />
        
        
        <h1>You can mail me help@geekster.in</h1>
        
    </div>
  );
}

 export default Contact;