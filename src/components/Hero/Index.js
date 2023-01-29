import React from "react";
import "./Style.css";
import aku from "../assets/Images/aku.png";
import linkedin from "../assets/Images/linkedin.png";
import telegram from "../assets/Images/telegram.png";
import instagram from "../assets/Images/instagram.png";
import CTA from "../../elements/Button/CTA";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="h-left">
        <div className="h-name">
          <p style={{ fontSize: "1.25rem" }}>Hallo, semuanya</p>
          <p className="name">Saya Nurma Yustina Rahmawati</p>
          <p className="h-info">
            Saya lulusan dari Politeknik Negeri Malang tahun 2021
            <br /> Saya memiliki keahlian di bidang public speaking,
            <br /> leadership, dan copywriting
          </p>
          <button>
            <CTA />
          </button>
        </div>
        <div className="h-connect">
          <a
            href="https://www.linkedin.com/in/nurma-yustina"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logos"
              src={linkedin}
              alt="linkedin"
              height={70}
              width={70}
            />
          </a>
          <a href="https://t.me/noerma18" target="_blank" rel="noreferrer">
            <img
              className="logos"
              src={telegram}
              alt="telegram"
              height={64}
              width={64}
            />
          </a>
          <a href="https://instagram.com/ara.raira.rahma" target="_blank" rel="noreferrer">
            <img
              className="logos"
              src={instagram}
              alt="instagram"
              height={64}
              width={64}
            />
          </a>
        </div>
      </div>
      <div className="h-right">
        <div className="h-box">
          <div>
            <img src={aku} alt="aku" height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
