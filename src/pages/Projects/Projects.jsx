import "./Projects.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { ProjectsData } from "../../assets/data/Data";
import Project from "../../components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SiwperSlideBtn from "../../components/SiwperSlideBtn/SiwperSlideBtn";
const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <GlobalTitle title={"My Projects"} description={"Most Recent Work"} />

      <div className="Projects__container container">
        <Swiper
          className="Swiper"
          grabCursor={true}
          spaceBetween={100}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            992: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SiwperSlideBtn />

          {ProjectsData.map((pro, index) => {
            return (
              <SwiperSlide key={index}>
                <Project pro={pro} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
