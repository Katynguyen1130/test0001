import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";
import { photos } from "../../../images";
import Marquee from "react-fast-marquee";
import TextComponent from "../../TextComponent/TextComponent";

import useIntersectionObserver from "../../../customHook/useIntersectionObserve";
import { useSpring, animated } from "@react-spring/web";
import BomConfetti from "../../common/confettiButton/BomConfetti";

function HeroCareer() {
  const triggerRef = useRef();
  const [confetti, setConfetti] = useState(false);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    config: { duration: 0 },
    opacity: dataRef?.isIntersecting ? 1 : 0,
    left: dataRef?.isIntersecting ? "0px" : "-500px",
  });

  return (
    <div className="flex flex-col pt-[116px] items-center">
      <div ref={triggerRef}></div>
      <animated.div
        style={{
          ...springs,
        }}
      >
        <div className="flex flex-col mt-5 lg:mt-10 mx-5 md:mx-8 xl:mx-[70px] 2xl:ml-[83px] 3xl-ml-[180px]  justify-center items-center">
          <div className="lg:text-center header-text">Careers</div>
          <div className="my-2 text-left lg:text-center body-text"> Get a front-row seat to one of the most exciting blockchain projects making a positive impact on people’s lives globally.</div>
          <Link to="/about" className="">
            <div className="relative top-2">{confetti && <BomConfetti />}</div>
            <div
            onMouseOver={() => setConfetti(true)}
            onMouseLeave={() => setConfetti(false)}
            className="my-10 rainbow-button   group  w-[345px] h-[68px] lg:w-[213px] rounded-full cursor-pointer bg-mainDarkGray  dark:bg-neonGreen  flex justify-center  items-center">
                <div className="text-white  dark:group-hover:text-white group-hover:text-neonGreen dark:text-mainDarkGray  text-lg font-semibold">About Us</div>
            </div>
          </Link>
        </div>
      </animated.div>

      {/* images place */}
      <div className=" w-full min-h-[350px] lg:h-[600px] bg-no-repeat  bg-career flex flex-col justify-end items-center">
        <div className="w-full min-h-[300px] lg:h-[550px] flex flex-col items-center relative ">
          <div className="h-full">
            <StaticImage src="../../../images/herocareer.png" alt="Dmple bgcareer" placeholder="blurred" className="h-full object-cover scale-in-center " />
          </div>
          <div className="absolute bottom-0 2xl:left-1/4 left-[10%] h-[450px] w-[250px] ">
            <TextComponent />
          </div>
        </div>
      </div>
      <Marquee speed={100} gradient={false} className="">
        <img src={photos.marquee} className="h-full w-full" />
      </Marquee>
    </div>
  );
}

export default HeroCareer;
