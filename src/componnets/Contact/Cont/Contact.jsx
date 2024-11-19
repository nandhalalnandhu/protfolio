import React, { useContext, useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { Mycont } from "../../Context";
import Swal from "sweetalert2";


function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.subject
    ) {
      alert("Please fill in all fields");

      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwQT-GLlXM32pnXA0Lz5QVpL07wckxSaJX1Ty5OCwCqWpe_CmIZbSAu_EoegTiK6NQdPg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Thank you! We'll get back to you soon.",
          text: "",
          icon: "success",
        });
        // alert("done");

        setTimeout(function () {
          window.location.reload();
        }, 3000);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  const { textStyle, divproStyle } = useContext(Mycont);


  return (
    <div style={divproStyle} id="contact" className="contact">
      <div className="navb">
       
        <Link className="nav-atag" to={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/14667/14667293.png"
            alt=""
            width={30}
          />
        </Link>
        
      </div>
      <div className="address-all">
        <div className="hed-get">
          <h1 style={textStyle}>
            Get in touch <div></div>
          </h1>
        </div>
        <br />
        <div className="Cont-all">
          <div className="add-box">
            <h3>Address</h3>
            <br />

            <span style={textStyle}>Wandoor P.O,679328</span>

            <span style={textStyle}>Malappuram,Kerala,India</span>
          </div>
          <div className="add-box">
            <h3>Contact</h3>
            <br />

            <a
              style={textStyle}
              className="addbox-atag"
              href="https://wa.me/917025880828"
            >
              +917025880828 via WhatsApp
            </a>

            <a
              style={textStyle}
              className="addbox-atag"
              href="mailto:nandhalalnandhuz@gmail.com"
            >
              thrico@gmail.com
            </a>
          </div>
          <div className="add-box">
            <h3>Social Media</h3>
            <br />
            <div className="Social-medi">
              <a
                className="socio-a"
                href="https://www.linkedin.com/in/nandhalal/"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  alt=""
                  width={20}
                />
              </a>
              <a className="socio-a" href="https://github.com/dashboard">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
                  alt=""
                  width={20}
                />
              </a>
              <a className="socio-a" href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14417/14417709.png"
                  alt=""
                  width={20}
                />
              </a>
              <a
                className="socio-a"
                href="https://www.instagram.com/_thri_lok/"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                  alt=""
                  width={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="contain">
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's fill in the blank!</div>

          <div class="input-container ic1">
            <input
              id="firstname"
              name="firstname"
              class="input"
              type="text"
              placeholder=" "
              required
              value={formData.firstname}
              onChange={handleChange}
            />
            <div class="cut"></div>
            <label for="firstname" class="placeholder">
              First name
            </label>
          </div>

          <div class="input-container ic2">
            <input
              id="lastname"
              name="lastname"
              class="input"
              type="text"
              placeholder=" "
              required
              value={formData.lastname}
              onChange={handleChange}
            />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">
              Last name
            </label>
          </div>

          <div class="input-container ic2">
            <input
              id="email"
              name="email"
              class="input"
              type="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">
              Email
            </label>
          </div>

          <div class="input-container ic2">
            <input
              id="subject"
              name="subject"
              class="textarea"
              type="text"
              placeholder="Type... "
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">
              Message*
            </label>
          </div>

          <br />
          <br />
          <br />

          <button
            class="submit"
            onClick={handleSubmitt}
            type="submit"
            title="Send Message"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
