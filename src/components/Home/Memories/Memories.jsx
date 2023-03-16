import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ScaleIncenterImage from "../../common/motion/ScaleIncenterImage";

// components and data

import { StaticImage } from "gatsby-plugin-image";

import MemoryWrap from "./../../common/MemoryWrap";
import MemoryCard from "./../../common/MemoryCard";

const Memories = () => {
  const [active, setActive] = useState(1);

  return (
    <div className=" flex flex-col items-center main-margin">
      {/* use swippers */}
      <>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          style={{
            "--swiper-pagination-color": "#B6FF75",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "12px",
          }}
        >
          <SwiperSlide>
            <MemoryWrap>
              <div className="w-[350px] md:w-[450px] lg:w-[600px] relative">
                <StaticImage src={"../../../images/illustrationbg.png"} alt="Dmple Logo" className="w-full  " placeholder="blurred" />
                <ScaleIncenterImage className="">
                  <div className="   w-[250px] md:w-[300px] lg:w-[350px] 2xl:w-[450px] ml-16">
                    <StaticImage src={"../../../images/illustration1.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />{" "}
                  </div>
                </ScaleIncenterImage>
              </div>
              <MemoryCard title={"Cool feature #1"} secondTitle={"Everlasting memories"} content={"Capture your most treasured moments in chat and turn them into living digital assets."} />
            </MemoryWrap>
          </SwiperSlide>
          <SwiperSlide>
            <MemoryWrap>
              <div className="w-[350px] md:w-[450px] lg:w-[600px] relative">
                <StaticImage src={"../../../images/illustrationbg.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />
                <ScaleIncenterImage>
                  <div className=" w-[200px] md:w-[280px] lg:w-[320px] ml-16">
                    <StaticImage src={"../../../images/illustration02.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />{" "}
                  </div>
                </ScaleIncenterImage>
              </div>
              <MemoryCard
                title={"Cool feature #2"}
                secondTitle={"Gamified chat app"}
                content={"Add an extra layer of excitement to your chats as you play built-in games with friends and family, all within an intuitive, user-friendly interface."}
              />
            </MemoryWrap>
          </SwiperSlide>
          <SwiperSlide>
            <MemoryWrap>
              <div className="w-[350px] md:w-[450px] lg:w-[600px] relative">
                <StaticImage src={"../../../images/illustrationbg.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />

                <ScaleIncenterImage>
                  <div className="  w-[250px] md:w-[350px] lg:w-[450px]">
                    <StaticImage src={"../../../images/illustration03.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />{" "}
                  </div>
                </ScaleIncenterImage>
              </div>
              <MemoryCard
                title={"Cool feature #3"}
                secondTitle={"Immersive interactive ecosystem"}
                content={"Discover a new, colorful way to interact with others through a fun avatar that represents you."}
              />
            </MemoryWrap>
          </SwiperSlide>
          <SwiperSlide>
            <MemoryWrap>
              <div className="w-[350px] md:w-[450px] lg:w-[600px] relative">
                <StaticImage src={"../../../images/illustrationbg.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />
                <ScaleIncenterImage>
                  <div className="  w-[250px] md:w-[350px] lg:w-[450px]">
                    <StaticImage src={"../../../images/illustration04.png"} alt="Dmple Logo" className="w-full " placeholder="blurred" />{" "}
                  </div>
                </ScaleIncenterImage>
              </div>
              <MemoryCard title={"Cool feature #4"} secondTitle={"Relationship Insights"} content={"Gain access to highly insightful data breaking down your relationships with each user."} />
            </MemoryWrap>
          </SwiperSlide>
        </Swiper>
      </>
    </div>

    // use swipers
  );
};

export default Memories;
