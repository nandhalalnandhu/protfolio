import React, { createContext, useState } from "react";

import vidA from "./Nav&main/video1.mp4";
import vidB from "./Nav&main/video2.mp4";

export const Mycont = createContext();

const Context = ({ children }) => {
  //Darkmode//

  const [convert, setConvert] = useState(false);

  const onChange = () => {
    setConvert(!convert);
  };

  const textmainStyle = {
    color: convert ? "lightblue" : "white",
  };

  const textStyle = {
    color: convert ? "black" : "white",
  };

  // =========================================

  const btn1Style = {
    color: convert ? "lightblue" : "rgb(3,253,195)",
    background: convert ? "transparent" : "transparent",
    border: convert ? " 2px solid lightblue " : " 2px solid rgb(3,253,195)",
  };

  const btn2Style = {
    color: convert ? "black" : "black",
    background: convert ? "lightblue" : "rgb(3,253,195)",
    border: convert ? " 2px solid lightblue " : " 2px solid rgb(3,253,195)",
  };

  //  ===============================================
  const divStyle = {
    background: convert ? "lightblue" : "rgba(0, 0, 0, 0.668)",
  };
  const divproStyle = {
    background: convert ? "lightblue" : "rgba(0, 0, 0, 0.668)",
  };
  const divpro2Style = {
    background: convert
      ? "linear-gradient(rgb(129,192,186), rgb(18, 154, 199))"
      : "linear-gradient(transparent,transparent )",
  };
  

  return (
    <Mycont.Provider
      value={{
        convert,
        onChange,
        textmainStyle,
        divStyle,
        textStyle,
        divproStyle,
        divpro2Style,
        btn1Style,
        btn2Style,
      }}
    >
      {children}
    </Mycont.Provider>
  );
};

export default Context;
