import { Button } from "@nextui-org/react";
import Banner from "../../components/home/banner";
import React from "react";
import Heading from "../../components/common/heading";
import {ExpandableCardDemo} from "../../components/cards/productCard";
import { MoveRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      
      <Banner/>
      <div className=" container">

      <Heading title={"Trending Products"}/>
      <ExpandableCardDemo/>
      <div className="flex justify-center">
        <Button className="bg-blackcurrent-500 text-white hover:bg-blackcurrent-600 px-10 my-5 rounded-md flex items-center">See All <MoveRight className="ms-1" /></Button>
      </div>

      <Heading title={"Featured Products"}/>
      <ExpandableCardDemo/>
      <div className="flex justify-center">
        <Button className="bg-blackcurrent-500 text-white hover:bg-blackcurrent-600 px-10 my-5 rounded-md flex items-center">See All <MoveRight className="ms-1" /></Button>
      </div>

      </div>
      
      
    </div>
  );
};

export default Home;
