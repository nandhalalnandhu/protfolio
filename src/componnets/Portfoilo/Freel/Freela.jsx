import React, { useContext } from "react";

import EDU from "../Assets/uk.png";
import FIX from "../Assets/Fix.png";
import thri from "../Assets/thrilok.png";
import { Mycont } from "../../Context";

function Freela() {
  const { divStyle } = useContext(Mycont);
  return (
    <div style={divStyle} className="phome">
      <div className="phome-inside">

        <div
          data-aos="zoom-in"
          data-aos-duration="300"

        >
          <button className="btnxx"> <a href="https://www.edumetrix.uk/">URL</a></button>
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
          <button className="btnxx"> <a href="https://fixpointsuae.com/"></a>URL</button>
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

          <button className="btnxx"> <a href="https://fixpointsuae.com/"></a>URL</button>
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
      </div>
    </div>
  );
}

export default Freela;
