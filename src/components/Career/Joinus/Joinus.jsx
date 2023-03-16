import React, { useState } from "react";
import { Link } from "gatsby";
import HeaderMotion from "../../common/motion/HeaderMotion";
import HearConfetti from "../../common/confettiButton/HearConfetti";

function Joinus() {
  const [confetti, setConfetti] = useState(false);
  return (
    <HeaderMotion>
      <div className="main-margin flex flex-col items-center my-14">
        <div className="header-text  ">Building our dream team</div>
        <div className="body-text my-4 lg:my-5 text-center ">
          Professionals learn, grow, and win together. We believe in empowering talents with freedom and leadership opportunities, fostering a positive company culture. We’re actively hiring. Come be
          a part of a fun, global, and fully remote company!
        </div>
        <Link to="mailto:careers@dmplestudio.com" className="">
          <div className="relative top-2">{confetti && <HearConfetti />}</div>
          <div
            onMouseOver={() => setConfetti(true)}
            onMouseLeave={() => setConfetti(false)}
            className="my-10 rainbow-button  dark:hover:text-white  group w-[345px] h-[68px] lg:w-[213px] rounded-full cursor-pointer bg-mainDarkGray rainbow dark:bg-neonGreen  flex justify-center  items-center"
          >
            <div className="text-white dark:group-hover:text-white   group-hover:text-neonGreen dark:text-mainDarkGray  text-lg font-semibold">Join Us</div>
          </div>
        </Link>
      </div>
    </HeaderMotion>
  );
}

export default Joinus;
