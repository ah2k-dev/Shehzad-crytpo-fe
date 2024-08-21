import { Button } from "@nextui-org/react";
import Banner from "../../components/home/banner";
import React from "react";
import Heading from "../../components/common/heading";
import {ExpandableCardDemo} from "../../components/cards/productCard";
import { MoveRight } from "lucide-react";
import Faqs from "../../components/home/faq";
import ShortServices from "../../components/home/shortServices";
import HowItWork from "../../components/home/howItWork";
import OusrServices from "../../components/home/ourServercies";

const Home = () => {
  return (
    <div>
      
      <Banner/>
      <div className=" container">
        <ShortServices/>

      {/* <Heading title={"Trending Products"}/>
      <ExpandableCardDemo/>
      <div className="flex justify-center">
        <Button className="bg-zinc-500 text-white hover:bg-zinc-600 px-10 my-5 rounded-md flex items-center">See All <MoveRight className="ms-1" /></Button>
      </div>

      <Heading title={"Featured Products"}/>
      <ExpandableCardDemo/>
      <div className="flex justify-center">
        <Button className="bg-zinc-500 text-white hover:bg-zinc-600 px-10 my-5 rounded-md flex items-center">See All <MoveRight className="ms-1" /></Button>
      </div> */}
      {/* <OusrServices/> */}
<HowItWork/>
      </div>
      <Faqs/>
      
    </div>
  );
};

export default Home;
