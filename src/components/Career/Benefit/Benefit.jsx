import React from "react";
import BenefitWrap from "./BenefitWrap";
import { benefitData } from "../../common/data/benefit";
import { photos } from "../../../images";
import Marquee from "react-fast-marquee";
import HeaderMotion from "../../common/motion/HeaderMotion";

function Benefit() {
  const renderBenefit = (data) => {
    return data.map((item) => <BenefitWrap title={item.title} icon={item.icon} content={item.content} />);
  };

  return (
    <div>
      <div className="main-margin my-20">
        <HeaderMotion>
          <div className="">
            <div className="header-text">Benefits & Perks</div>

            <div className="body-text">
              Enjoy complete freedom and autonomy to take ownership of your fully remote role in a global team. Our full-time team members are rewarded with the following perks:
            </div>
          </div>
        </HeaderMotion>

        <div className="my-10">{benefitData && renderBenefit(benefitData)}</div>
      </div>

      <Marquee speed={100} gradient={false} className="mt-10">
        <img src={photos.marquee} className="h-full w-full" />
      </Marquee>
    </div>
  );
}

export default Benefit;
