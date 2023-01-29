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

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects" id="Projects">
        <div className="p-head">
          <p>Pengalaman</p>
          <p style={{ color: "#b1aafe", marginTop: "0.5rem" }}>Organisasi dan Pelatihan</p>
        </div>

        <div className="cards">
          <Swiper {...params}>
            <SwiperSlide>
              <Cards
                p_name={"Best Danton"}
                p_details={"LKBB Cendrawasih 2017 Se-Jawa Timur Open"}
                p_link={"https://drive.google.com/file/d/1PfWWKBOUn6KpqndhJXZjuJhy69FDPCcx/view?usp=sharing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                p_name={"Dare to Speak Up"}
                p_details={"Pelatihan Public Speaking"}
                p_link={
                  "https://drive.google.com/file/d/1kHdAekQsqO-Q7y6kI1KHlElQR0447tEC/view?usp=sharing"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                p_name={"UKM Pasti Polinema"}
                p_details={"Steering Committe"}
                p_link={
                  "https://drive.google.com/file/d/1XxRVr9D3SN9kCVg5aNaUUvlAcoJVhBhX/view?usp=sharing"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                p_name={"Youth Abroud Expedition"}
                p_details={"Fly With Outstanding Students"}
                p_link={
                  "https://drive.google.com/file/d/1DkokicSW60yHUcnrRMjlJg8riQBJfv2U/view?usp=sharing"
                }
              />
            </SwiperSlide>
           </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
