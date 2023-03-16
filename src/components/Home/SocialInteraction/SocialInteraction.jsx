import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import HeaderMotion from "../../common/motion/HeaderMotion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SocialInteraction = () => {
  const rowRef = useRef();
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;

      const scrollTo = direction === "left" ? scrollLeft - 500 : scrollLeft + 500;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const variants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: 0.75,
      opacity: 0.5,
      transition: {
        delay: 0.1,
        ease: "linear",
      },
    },
  };

  return (
    <div className="main-margin mt-5 xl:mt-40 ">
      <div className=" my-10">
        <div className="container  ">
          <HeaderMotion>
            <div className="header-text ">Bold ideas, big smiles</div>
            <div className="my-2 body-text">
               We're bridging the gap between blockchain technology and the everyday person, bringing <br />
              fresh, exciting opportunities to anyone interested in the web3 space.
            </div>
          </HeaderMotion>

          {/* dots  */}
          <div className="mt-6">
            <svg width="69" height="10" viewBox="0 0 69 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4.692" cy="4.692" r="4.692" fill="#333333" />
              <circle opacity="0.7" cx="24.5631" cy="4.69188" r="4.692" fill="#333333" />
              <circle opacity="0.5" cx="44.4361" cy="4.69188" r="4.692" fill="#333333" />
              <circle opacity="0.2" cx="64.3072" cy="4.69188" r="4.692" fill="#333333" />
            </svg>
          </div>
        </div>
        {/* checkpoint 1 */}
        <div className="hidden xl:block  ">
          <>
            <Swiper
              slidesPerView={2}
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
                <motion.section variants={variants} transition={{ type: "inertia", velocity: 100 }} className="mr-2 ">
                  <motion.div initial="visible" whileInView="visible">
                    <Card1 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
              <SwiperSlide>
                <motion.section variants={variants} className="mx-2 " transition={{ type: "inertia", velocity: 100 }}>
                  <motion.div initial="hidden" whileInView="visible">
                    <Card2 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
              <SwiperSlide>
                <motion.section className="mx-2" transition={{ type: "inertia", velocity: 100 }}>
                  <motion.div initial="hidden" whileInView="visible">
                    <Card3 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
              <SwiperSlide>
                <motion.section transition={{ type: "inertia", velocity: 100 }} className="mx-2">
                  <motion.div initial="hidden" whileInView="visible">
                    <Card4 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
            </Swiper>
          </>
        </div>

        <div className=" xl:hidden">
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
                <motion.section transition={{ type: "inertia", velocity: 100 }} className="mx-2 ">
                  <motion.div initial="visible" whileInView="visible">
                    <Card1 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
              <SwiperSlide>
                <motion.section className="mx-2 " transition={{ type: "inertia", velocity: 100 }}>
                  <motion.div initial="hidden" whileInView="visible">
                    <Card2 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
              <SwiperSlide>
                <motion.section className="mx-2" transition={{ type: "inertia", velocity: 100 }}>
                  <motion.div initial="hidden" whileInView="visible">
                    <Card3 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
              <SwiperSlide>
                <motion.section transition={{ type: "inertia", velocity: 100 }} className="mx-2 ">
                  <motion.div initial="hidden" whileInView="visible">
                    <Card4 />
                  </motion.div>
                </motion.section>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        {/* checkpoint 02 ____________________ */}
      </div>
    </div>
  );
};

export default SocialInteraction;
