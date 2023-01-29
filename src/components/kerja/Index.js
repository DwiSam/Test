import React from "react";
import "./Style.css";
import Cards from "../../elements/Cards/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";

const params = {
  pagination: {
    dynamicBullets: true,
  },
  modules: [Pagination],
  grabCursor: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
};

const kerja = () => {
  return (
    <section id="projects">
      <div className="projects" id="Projects">
        <div className="p-head">
          <p>Pengalaman</p>
          <p style={{ color: "#b1aafe", marginTop: "0.5rem" }}>Kerja dan Magang</p>
        </div>

        <div className="cards">
          <Swiper {...params}>
          <SwiperSlide>
              <Cards
                p_name={"Perempuan Hebat Trenggalek Meroket"}
                p_details={"Bootcamp Bussines Perempuan Hebat Trenggalek Meroket  "}
                p_link={
                  "https://drive.google.com/file/d/1-hfO8El5pJcEGlhWZFyYXRJbZtgTl5eU/view?usp=sharing"
                }
              />
              </SwiperSlide>
               <SwiperSlide>
              <Cards
                p_name={"PT Nexwave"}
                p_details={"Praktek Kerja Lapang"}
                p_link={
                  "https://drive.google.com/file/d/1YFMK1YtlFacVNJq57CeMmB2BVlEPmvba/view?usp=sharing"
                }
              />
              </SwiperSlide>
              <SwiperSlide>
              <Cards
                p_name={"PT Telkom (Infomedia)"}
                p_details={"Call Center 147"}
                p_link={
                  "https://drive.google.com/file/d/1sfL62HeyLMlu49QWPMBc7kbhrEr59pl9/view?usp=sharing"
                }
                />
            </SwiperSlide>
           </Swiper>
        </div>
      </div>
    </section>
  );
};

export default kerja;
