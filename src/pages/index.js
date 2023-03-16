import React, { useContext } from "react";
import Hero from "../components/Home/Hero";
import SocialInteraction from "../components/Home/SocialInteraction";
import HelloJam3 from "../components/Home/HelloJam3";
import Memories from "../components/Home/Memories";
import JoinUs from "../components/Home/JoinUs";
import Text from "../components/TextComponent/TextComponent";

import MainLayout from "../layout/MainLayout";
import TextComponent from "../components/TextComponent/TextComponent";

const index = () => {
  return (
    <MainLayout>
      <Hero />
      <SocialInteraction />
      <HelloJam3 />
      <Memories />
      <JoinUs />
    </MainLayout>
  );
};

export default index;
