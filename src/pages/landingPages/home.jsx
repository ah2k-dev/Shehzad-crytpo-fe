import TopBar from "../../components/layouts/topBar"
import { Button } from "@nextui-org/react";
import Banner from "../../components/home/banner";
import React from "react";
import TopNavbar from "../../components/layouts/navbar";
import CategoryList from "../../components/layouts/categoryList";
import Heading from "../../components/common/heading";
import Footer from "../../components/layouts/footer";
import {ExpandableCardDemo} from "../../components/cards/productCard";

const Home = () => {
  return (
    <div>
      <TopBar/>
      <TopNavbar/>
      <CategoryList/>
      <Banner/>
      <div className=" container">

      <Heading title={"Trending Products"}/>
      <ExpandableCardDemo/>

      <Heading title={"Featured Products"}/>
      <ExpandableCardDemo/>
      
      </div>
      <Footer/>
      
    </div>
  );
};

export default Home;
