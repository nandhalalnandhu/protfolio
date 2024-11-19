import React, { useContext, useEffect } from "react";
import "./Phome.css";

import AS from "../Assets/AS.png";
import lof from "../Assets/lofkkart.png";
import fire from "../Assets/firebase.png";
import EDU from "../Assets/uk.png";
import FIX from "../Assets/Fix.png";
import thri from "../Assets/thrilok.png";
import gemini from "../Assets/gemini.png";
import Stockx from "../Assets/stockx.png";
import netfilx from "../Assets/netfilx.png";
import dtdc from "../Assets/dtdc.png";
import licious from "../Assets/licious.png";
import practo from "../Assets/practo.png";

import AOS from "aos";
import { Mycont } from "../../Context";

function Phome() {
  const { divStyle } = useContext(Mycont);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div style={divStyle} className="phome">
      <div className="phome-inside">
        <div
          data-aos="zoom-in"
          data-aos-duration="300"

        >
          <button className="btnxx"><a href="https://astonmartin-clone.netlify.app/">URL</a></button>
          <div class="card">

            <div class="icon">
              <img src={AS} alt="" />
            </div>
            <strong>Aston Martin Clone</strong>

            <span>
              <p>
                This is Responsive <br />
                clone website <br />i made for study purpose
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>

          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"

        >
          <button className="btnxx"> <a href="https://lofkart.netlify.app/">URL</a> </button>
          <div class="card">

            <div class="icon">
              <img src={lof} alt="" />
            </div>
            <strong>LOFKART ECOMMERCE + ADMIN PANEL</strong>

            <span>
              <p>
                This is Responsive <br />
                website <br /> Using MERN stack <br />i made for Own purpose
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://pbs.twimg.com/profile_images/1752267180966645760/WCHD7AES_400x400.jpg"
                alt=""
                width={40}
              />
            </span>

          </div>
        </div>


        <div
          data-aos="zoom-in"
          data-aos-duration="300"

        >
          <button className="btnxx"><a href="https://firebase-auth-chi-blue.vercel.app/login">  URL</a></button>
          <div class="card">

            <div class="icon">
              <img src={fire} alt="" />
            </div>
            <strong> Authentication + Firebase</strong>

            <span>
              <p>
                This is Responsive <br />
                Auth sute <br /> Using Firebase backend<br />i made for Own purpose
              </p>
              <img
                src="http://localhost:3000/static/media/htcs.1273dd83a0fbfde64d57.png"
                alt=""
                width={40}
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY25Ev6m82sl72xixg5_NIIR4pMlStevelg&s"
                alt=""
                width={40}
              />

              <img
                src="https://pbs.twimg.com/profile_images/1752267180966645760/WCHD7AES_400x400.jpg"
                alt=""
                width={40}
              />
            </span>

          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
         
        >
          <button className="btnxx"><a  href="https://www.edumetrix.uk/">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={EDU} alt="" />
            </div>
            <strong>Edumetrix.uk</strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website <br />i made for client
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          
        >
          <button className="btnxx"> <a href="https://fixpointsuae.com/">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={FIX} alt="" />
            </div>
            <strong>Fix point</strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website <br />i made for own client project
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>

        <a data-aos="zoom-in" data-aos-duration="300" href="">
          <button className="btnxx"> URL</button>
          <div class="card">
            <div class="icon">
              <img src={thri} alt="" />
            </div>
            <strong>Thrilok.co</strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website <br />i made for <br /> My Signature Website
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </a>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
         
        >
          <button className="btnxx"> <a  href="https://gemini-thrilok.netlify.app/">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={gemini} alt="" />
            </div>
            <strong>Gemini clone </strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                website i made for study purpose <br /> (FULL STACK)
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="300" >
          <button className="btnxx"><a href="">URL</a> </button>
          <div class="card">
            <div class="icon">
              <img src={Stockx} alt="" />
            </div>
            <strong>Sneaker Culture</strong>

            <span>
              <p>
                This is fully responsive <br />
                E-commerce website <br />i made for Study purpose <br />
                (MERN STACK)
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBF3Y9fCMAXThIDtSvY1BBw42OUAe5JMwww&s"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="300" href="">
          <button className="btnxx"> <a href="">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={netfilx} alt="" />
            </div>
            <strong>Netfilx clone</strong>

            <span>
              <p>
                This is responsive <br />
                netifilx clone website (FULLSTACK)
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="300" href="">
          <button className="btnxx"> <a href="">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={licious} alt="" />
            </div>
            <strong>Licious Clone</strong>

            <span>
              <p>
                {" "}
                This is responsive <br />
                clone website <br />i made for study purpose
              </p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>

         <div
          data-aos="zoom-in"
          data-aos-duration="300"
         
        >
          <button className="btnxx"><a href="">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={dtdc} alt="" />
            </div>
            <strong>DTDC Clone</strong>

            <span>
              <p>
                {" "}
                This is responsive <br />
                clone website <br />i made for study purpose
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div> 

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
         
        >
          <button className="btnxx"> <a h href="">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={practo} alt="" />
            </div>

            <strong>Practo Clone</strong>

            <span>
              <p>
                {" "}
                This is responsive <br />
                clone website <br />i made for study purpose
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt=""
                width={40}
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt=""
                width={40}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phome;
