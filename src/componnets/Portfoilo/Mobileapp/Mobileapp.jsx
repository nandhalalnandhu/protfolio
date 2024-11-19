import React, { useContext } from "react";

import gemini from "../Assets/gemini.png";
import Stockx from "../Assets/stockx.png";
import fire from "../Assets/firebase.png";
import netfilx from "../Assets/netfilx.png";
import lof from "../Assets/lofkkart.png";
import { Mycont } from "../../Context";

function Mobileapp() {
  const { divStyle } = useContext(Mycont);
  return (
    <div style={divStyle} className="phome">
      <div className="phome-inside">




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


        <div data-aos="zoom-in" data-aos-duration="300" >
          <button className="btnxx"><a href="">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={gemini} alt="" />
            </div>
            <strong>Gemini clone </strong>

            <span>
              <p>
                {" "}
                This is Responsive <br />
                websitei made for study purpose <br /> (FULL STACK)
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

        <div data-aos="zoom-in" data-aos-duration="300" > <button className="btnxx"> <a href="">URL</a></button>
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
        <div data-aos="zoom-in" data-aos-duration="300" > <button className="btnxx"><a href="">URL</a></button>
          <div class="card">
            <div class="icon">
              <img src={netfilx} alt="" />
            </div>
            <strong>Netfilx clone</strong>

            <span>
              <p>
                This is responsive <br />
                netifilx clone website <br /> (FULL STACK)
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

      </div>
    </div>
  );
}

export default Mobileapp;
