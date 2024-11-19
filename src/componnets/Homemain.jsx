import React from "react";
import Nm from "./Nav&main/Nm";
import Skill from "./skill/Skill";

import Whati from "./what/Whati";
import Wwhat from "./Whathead/Wwhat";
import Foot from "./Footer/Foot";
import Portnav from "./Portfoilo/Navbaa/Portnav";
import "../componnets/Homemain.css";


const Homemain = () => {
  return (
    <>
     
      
      <div className="totel">
        <Nm />
        <Wwhat />
        <Whati />
        <Skill />
        <Portnav />
        <Foot />
      </div>
    </>
  );
};

export default Homemain;
