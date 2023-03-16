import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "gatsby";
import HeaderMotion from "../../common/motion/HeaderMotion";
import HearConfetti from "../../common/confettiButton/HearConfetti";

import { photos } from "../../../images";

const JoinUs = () => {
  const [confetti, setConfetti] = useState(false);
  return (
    <div className="mx-auto">
      <Marquee speed={100} gradient={false}>
        <img src={photos.marquee} className="h-full w-full" />
      </Marquee>
      <HeaderMotion>
        <div className="mt-44 mx-5 md:mx-8 lg:mx-[70px] xl:mx- flex items-center flex-col text-center justify-center">
          <div className="header-text">
            Creating Dmples In Web3 <br />
            And Beyond
          </div>
          <div className="mt-10 body-text">
            Through our playful and intuitive platform where fun meets everyday interaction, we're creating spaces
            <br /> for smiles so big they can't help but show off some dmples. We are fundraising. Be the first to capitalize
            <br /> on the next big social platform that millions flock to.
          </div>
          <Link to="mailto:careers@dmplestudio.com" className="">
            <div className="relative top-2">{confetti && <HearConfetti />}</div>
            <div
              onMouseOver={() => setConfetti(true)}
              onMouseLeave={() => setConfetti(false)}
              className="my-10 rainbow-button  dark:hover:text-white group  w-[345px] h-[68px] lg:w-[213px] rounded-full cursor-pointer bg-mainDarkGray  dark:bg-neonGreen  flex justify-center  items-center"
            >
              <div className="text-white  dark:group-hover:text-white group-hover:text-neonGreen dark:text-mainDarkGray  text-lg font-semibold">Join Us</div>
            </div>
          </Link>
        </div>
      </HeaderMotion>
    </div>
  );
};

export default JoinUs;
