import { useState, useEffect } from "react";

const ClickTwo = () => {
  const [msg, setMsg] = useState("default");
  return (
    <div>
      <h1> {msg} </h1>
      <button
        type="buttom"
        onClick={()=>{
          setMsg("Great Day!");
        }}
        >
          Insert Msg
        </button>
    </div>
  );
};

export default ClickTwo;