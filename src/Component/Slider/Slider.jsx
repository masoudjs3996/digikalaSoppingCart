import { sliderData } from "../../sliderData";
import { Swiper, SwiperSlide , } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { EffectCoverflow, Pagination,Autoplay } from "swiper";

const TopSlider = () => {
  return (
    <>
      <div className="">
        <Swiper
        autoplay={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderData.map((item) => {
            return (
              <SwiperSlide>
                <div className="w-full md:w-full h-[250px] md:h-[300px] bg-red-300 ">
                  <img
                    src={item.image}
                    alt="masoud"
                    className=" w-full h-full"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default TopSlider;

// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
// const AutoplaySlider  = withAutoplay(AwesomeSlider);

// {/* <div className=" w-full h-48 flex flex-row mt-3"> */}
//       {/* <AutoplaySlider
//           play
//           cancelOnInteraction={false} // should stop playing on user interaction
//           interval={2000}
//           className=""
//         > */}

//       {/* </AutoplaySlider> */}
//       {/* </div> */}
