import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";
import HeaderMotion from "./../../common/motion/HeaderMotion";
import TextComponent from "../../TextComponent/TextComponent";
import BomConfetti from "./../../common/confettiButton/BomConfetti";

const Hero = () => {
  const [confetti, setConfetti] = useState(false);
  return (
    <div className="flex flex-col   2xl:flex-row pt-[116px]  w-full mx-auto">
      {/* TExt and button  */}
      <HeaderMotion>
        <div className="flex flex-col mx-5 md:mx-12  xl:ml-[70px] 2xl:ml-[100px] 3xl:ml-[160px]  2xl:mt-40 justify-center  items-center ">
          <div className="text-left lg:text-center header-text 2xl:text-left  ">Web3 Innovations that Make You Smile </div>
          <div className="mt-2 lg:mt-8 text-left lg:text-center xl:mb-20 2xl:text-left body-text">
            A global software development studio headquartered in Singapore, Dmple Studio is on a mission to simplify the world of crypto and unleash the limitless potential of web3 for everyone.{" "}
          </div>
          <Link to="mailto:hello@dmplestudio.com" className="">
            <div className="relative top-2">{confetti && <BomConfetti />}</div>
            <div
              onMouseOver={() => setConfetti(true)}
              onMouseLeave={() => setConfetti(false)}
              className="my-10 rainbow-button  dark:hover:text-white group   w-[345px] h-[68px] lg:w-[213px] rounded-full cursor-pointer bg-mainDarkGray  dark:bg-neonGreen  flex justify-center  items-center"
            >
              <div className="text-white  dark:group-hover:text-white group-hover:text-neonGreen dark:text-mainDarkGray  text-lg font-semibold">About Us</div>
            </div>
          </Link>
        </div>
      </HeaderMotion>
      {/* images  */}
      <div className="w-screen mt-10 md:flex md:justify-center items-center h-[380px]  md:h-[500px]  lg:h-[860px]    ">
        <div className="relative flex-col items-center overflow-hidden w-full h-full">
          <div className="  md:left-0  md:flex md:items-center h-full w-full overflow-hidden ">
            <StaticImage src="../../../images/herobg.png" alt="Dmple character" placeholder="blurred" className="object-cover h-full w-full" />
          </div>
          <div className="  absolute  transform  m-auto left-0 right-0   bottom-0 w-[350px] h-[360px] md:w-[450px] md:h-[470px]  lg:w-[810px] lg:h-[880px] flex justify-center items-center go-up ">
            <StaticImage src="../../../images/heroChar.png" alt="Dmple character" placeholder="blurred" className="object-fit w-full h-full " />
          </div>
          {/* <div className=" absolute z-20 w-[40%] bottom-[5%] left-[10%] md:left-10% max-w-[230px] 2xl:bottom-[114px] 2xl:left-[90px] pulsate-fwd ">
            <StaticImage src="../../../images/bgcareer2.png" alt="Dmple bgcareer" placeholder="blurred" className="object-cover min-h-full" />
          </div> */}
          <div className="absolute bottom-0 lg:bottom-[40px] left-10 md:left-20 h-[450px] w-[250px] ">
            <TextComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
