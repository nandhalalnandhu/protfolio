import React, { useContext, useEffect, useState } from "react";
import "./Nm.css";

import LOgo from "./navlogoz.png";

import vidA from "../Nav&main/videooz.mp4";
import vidB from "../Nav&main/video2.mp4";

import me from "../assets/iam.png";
// import res from "../assets/cvv.pdf";
import Ania from "./ani.mp4";
import Anib from "./ani2.mp4";

import { Link, Outlet } from "react-router-dom";
import { Mycont } from "../Context";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Nm() {
  const { convert, onChange, textmainStyle, btn1Style, btn2Style } =
    useContext(Mycont);

  const videoStyle = {
    video: convert ? "vidB" : "vidA",
  };

  const video2Style = {
    video: convert ? "Ania" : "Anib",
  };

  const [light, setlight] = useState(true);

  const click = () => {
    setlight(!light);
  };

  const [headline, setHeadline] = useState("I'm Dev");
  const headlines = ["I'm Nandhlal Ak  ", "Software Developer", "Freelancer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadline((prevHeadline) => {
        const currentIndex = headlines.indexOf(prevHeadline);
        const nextIndex = (currentIndex + 1) % headlines.length;
        return headlines[nextIndex];
      });
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <div id="mainzz" className="mainz">
        <video
          style={videoStyle}
          autoplay="true"
          loop="true"
          muted="true"
          preload="auto"
          src={convert ? vidB : vidA}
        ></video>

        <nav>
          <div className="nav-inside">
            <img src={LOgo} alt="" />

            <div className="nav-content">
              <a className="nav-atag" href="">
                <span className="spp" style={textmainStyle}>
                  Home
                </span>
              </a>
              <a className="nav-atag" href="#Protfolio">
                <span className="spp" style={textmainStyle}>
                  Portfolio{" "}
                </span>
              </a>
              <a className="nav-atag" href="#skill">
                <span className="spp" style={textmainStyle}>
                  Skills{" "}
                </span>
              </a>
              <Link className="nav-atag" to={"/contact"}>
                <span className="spp" style={textmainStyle}>
                  Contact
                </span>
              </Link>
              <div onClick={onChange} className="nav-atag">
                <span onClick={click}>
                  {light ? (
                    <MdOutlineDarkMode className="darkl" />
                  ) : (
                    <MdLightMode className="darkl" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </nav>

        <header>
          <div id="head" className="head-text">
            <div style={textmainStyle} className="contentxx">
              <span className="namez">Hi there</span>
              <span className="text-headx">{headline}</span>
              <span className="namez">With Emphasis on</span>
              <span className="namez"> Responsive Design</span>
            </div>

            <div className="buttonh">
              <a href="#wwhat">
                {" "}
                <button style={btn1Style} className="bta">
                  Know More
                </button>
              </a>
              <Link className="nav-atag" to={"/contact"}>
                <button style={btn2Style} className="btb">
                  Connect Me
                </button>
              </Link>
            </div>
          </div>
          <div className="my-img">
            <img src={me} alt="" />
          </div>
        </header>
      </div>
    </>
  );
}

export default Nm;
