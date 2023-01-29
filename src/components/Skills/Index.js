import React from "react";
import "./Style.css";
import Cards from "../../elements/Cards/Skills";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills" id="Skills">
        <div className="s-info">
          <div className="s-head">
            <p>
              {"Keahlian"}
           </p>
          </div>
        </div>
        <div className="s-card">
          <Cards
            header={"Microsoft Office"}
            l1={"Microsoft Word"}
            w1={"90%"}
            l2={"Microsoft Excel"}
            w2={"80%"}
            l3={"Microsoft Power Point"}
            w3={"70%"}
          />

          <Cards
            header={" Desain Grafis"}
            l1={"Adobe Illustrator"}
            w1={"80%"}
            l2={"Photoshop"}
            w2={"70%"}
            l3={"Figma"}
            w3={"70%"}
          />
          <Cards

            header={" Public Speaking"}
            l1={"Pembawa Acara (MC)"}
            w1={"90%"}
            l2={"Marketing"}
            w2={"70%"}
            l3={"Customer Service"}
            w3={"95%"}
          />
        </div>
        <ParallaxProvider>
          <Parallax speed={-30}>
            <div className="s-innerWordCloud">
              <p>Microsoft Word</p>
              <p>Microsoft Excel</p>
              <p>Microsoft Power Point</p>
              <p>Adobe Illustrator</p>
              <p>Photosop</p>
              <p>Pigma</p>
              <p>MC</p>
              <p>Customer Service</p>
              <p>Marketing</p>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
    </section>
  );
};

export default Skills;
