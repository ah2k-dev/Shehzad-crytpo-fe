import { cn, Divider } from "@nextui-org/react";
import RoadmapCard from "../../animations/roadmapCards";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../animations/fade";
import React from "react";
import Heading from "../common/heading";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const OusrServices = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  console.log(isDesktopOrLaptop, isTabletOrMobile);
  return (
    <div>
      <div className=" px-6   py-20  ">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-5xl text-white font-Baskervville mb-10 text-center"
        >
          <Heading title={"Our services"} />
        </motion.p>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-5xl font-Baskervville mb-10 text-center"
        >
          <p className="text-2xl font-Baskervville mb-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </motion.p>
      </div>
      {isDesktopOrLaptop && (
        <div className="timeline">
          <SectionR
            text1={"Founded Flight Corporation"}
            text2={
              "LEO Flight wins NASA HeroX award for innovation and develops its DARPA-backed electric-jet propulsion system."
            }
            image={image1}
            imageDim={[200, "300px"]}
            lineHeight={"320px"}
          />
          <SectionL
            text1={"LEO Coupe Design Validated"}
            text2={
              "LEO Flight develops and validates the LEO Coupe's aerodynamic design, builds the LX-1 demo aircraft."
            }
            image={image2}
            imageDim={[200, "300px"]}
            lineHeight={"320px"}
          />
          <SectionR
            text1={"Subscale Flight Testing"}
            text2={"Subscale flight testing on ArcSpear Jet Drone platform."}
            image={image3}
            imageDim={[200, "300px"]}
            lineHeight={"320px"}
          />
          <SectionL
            text1={"Testing & Development"}
            text2={
              "LX-1 demo aircraft flight testing/LEO Coupe demo aircraft development."
            }
            image={image4}
            imageDim={[200, "300px"]}
            lineHeight={"320px"}
          />
        </div>
      )}
      {isTabletOrMobile && (
        <div className="timeline">
          <MobileSection
            year={2021}
            text1={"Founded Flight Corporation"}
            text2={
              "LEO Flight wins NASA HeroX award for innovation and develops its DARPA-backed electric-jet propulsion system."
            }
            image={image1}
            imageDim={[200, 200]}
            lineHeight={"230px"}
          />
          <MobileSection
            text1={"LEO Coupe Design Validated"}
            text2={
              "LEO Flight develops and validates the LEO Coupe's aerodynamic design, builds the LX-1 demo aircraft."
            }
            image={image2}
            imageDim={[200, 250]}
            lineHeight={"260px"}
          />
          <MobileSection
            text1={"Subscale Flight Testing"}
            text2={"Subscale flight testing on ArcSpear Jet Drone platform."}
            image={image3}
            imageDim={[470, 250]}
            lineHeight={"220px"}
          />
          <MobileSection
            text1={"Testing & Development"}
            text2={
              "LX-1 demo aircraft flight testing/LEO Coupe demo aircraft development."
            }
            image={image4}
            imageDim={[200, 250]}
            lineHeight={"260px"}
          />
          
        </div>
      )}
    </div>
  );
};

export default OusrServices;

const SectionR = ({ text1, text2, image, imageDim, lineHeight }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.8 });
  return (
    <div className="section" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          fontSize: "8rem",
          color: "lightgrey",
          width: "50%",
          fontFamily: "FuturaPT",
          letterSpacing: "1.2rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={image}
          alt="icon"
          style={{
            height: imageDim[1],
            width: "100%",
          }}
        />
      </div>
      {isInView && (
        <div>
          <svg
            width="5px"
            height={lineHeight}
            viewBox="0 0 1 100"
            style={{
              overflow: "hidden",
            }}
          >
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
              }}
              transition={{ duration: 4 }}
              d="M1 0 L1 100"
              fill="none"
              stroke="#888"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      )}
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          height: "max-content",
          // transform: isInView ? "none" : "translateX(50px)",
          fontFamily: "FuturaPT",
        }}
      >
        <span
          style={{
            marginLeft: "1.5rem",
            fontSize: "1.4rem",
            fontWeight: "600",
            // marginBottom: "1.3rem", // comment after adding svg
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-orange-500 font-Baskervville"
        >
          {text1}
        </span>
        {/* right horizontal svg here */}
        {isInView && (
          <div>
            <svg
              width="100%"
              height={"100%"}
              viewBox="1 -1.39523 961 19.78853"
              style={{
                overflow: "hidden",
              }}
            >
              <motion.path
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                }}
                transition={{ duration: 4 }}
                d="M1 13.5759C1 13.5759 1 3.25302 6.0209 1.26266C12.7257 -1.39523 34.1379 16.9775 40.163 17.6854C46.1881 18.3933 962 17.6854 962 17.6854"
                fill="none"
                stroke="#888"
                strokeWidth="3"
              />
            </svg>
          </div>
        )}
        <span
          style={{
            marginLeft: "1.5rem",
            
            width: "60%",
            fontSize: "1.2rem",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            maxWidth: "450px",
            marginTop: "1rem",
          }}
          className="text-slate-300"
        >
          {text2}
        </span>
      </div>
    </div>
  );
};
const SectionL = ({ text1, text2, image, imageDim, lineHeight }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.8 });
  return (
    <div className="section" ref={ref}>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          height: "max-content",
          // transform: isInView ? "none" : "translateX(-50px)",

          fontFamily: "FuturaPT",
          alignItems: "flex-end",
          marginLeft: "1rem",
        }}
      >
        <span
          style={{
            marginRight: "1.5rem",
            fontSize: "1.4rem",
            fontWeight: "600",
            // marginBottom: "1.3rem", // comment after adding svg
            textAlign: "left",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
           className="text-orange-500 font-Baskervville"
        >
          {text1}
        </span>
        {/* left horizontal svg here */}
        {isInView && (
          <div>
            <svg
              width="100%"
              height={"20px"}
              viewBox="0 -1.3358 961 15.7304"
              style={{
                overflow: "hidden",
              }}
            >
              <motion.path
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                }}
                transition={{ duration: 4 }}
                d="M961 13.6843C961 13.6843 961 3.32767 955.963 1.33079C949.237 -1.3358 932.291 12.9742 926.247 13.6844C920.203 14.3946 -4.19617e-05 13.6843 -4.19617e-05 13.6843
"
                fill="none"
                stroke="#888"
                strokeWidth="3"
              />
            </svg>
          </div>
        )}
        <span
          style={{
            marginRight: "1.5rem",
            width: "60%",
            fontSize: "1.2rem",
            textAlign: "right",
            maxWidth: "450px",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            marginTop: "1rem",
          }}
          className="text-slate-300"
        >
          {text2}
        </span>
      </div>
      {isInView && (
        <div
          style={
            {
              // paddingLeft: "1rem",
            }
          }
        >
          <svg
            width="5px"
            height={lineHeight}
            viewBox="0 0 1 100"
            style={{
              overflow: "hidden",
            }}
          >
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
              }}
              transition={{ duration: 4 }}
              d="M1 0 L1 100"
              fill="none"
              stroke="#888"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      )}
      <div
        style={{
          transform: isInView ? "none" : "translateX(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          fontSize: "8rem",
          color: "lightgrey",
          textAlign: "left",
          marginLeft: "1rem",
          width: "50%",
          fontFamily: "FuturaPT",
          letterSpacing: "1.2rem",
        }}
      >
        <img
          src={image}
          alt="icon"
          style={{
            height: imageDim[1],
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
const MobileSection = ({ text1, text2, image, imageDim, lineHeight }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  console.log(isInView);
  return (
    <div className="section" ref={ref}>
      
      <div>
        {isInView && (
          <div>
            <svg
              width="5px"
              height={lineHeight}
              viewBox="0 0 1 100"
              style={{
                overflow: "hidden",
              }}
            >
              <motion.path
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                }}
                transition={{ duration: 4 }}
                d="M1 0 L1 100"
                fill="none"
                stroke="#000"
                strokeWidth="0.2"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          height: "max-content",
          // transform: isInView ? "none" : "translateX(50px)",
          fontFamily: "FuturaPT",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            marginLeft: "1rem",
            fontSize: "1rem",
            fontWeight: "600",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {text1}
        </span>
        {/* right horizontal svg here */}
        {isInView && (
          <div>
            <svg
              width="100%"
              height={"100%"}
              viewBox="1 -1.39523 961 19.78853"
              style={{
                overflow: "hidden",
              }}
            >
              <motion.path
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                }}
                transition={{ duration: 4 }}
                d="M1 13.5759C1 13.5759 1 3.25302 6.0209 1.26266C12.7257 -1.39523 34.1379 16.9775 40.163 17.6854C46.1881 18.3933 962 17.6854 962 17.6854"
                fill="none"
                stroke="#000"
                strokeWidth="5"
              />
            </svg>
          </div>
        )}
        <span
          style={{
            marginLeft: "1rem",
            color: "#666",
            width: "80%",
            fontSize: "0.8rem",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            maxWidth: "450px",
          }}
        >
          {text2}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "450px",
            width: "80%",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {typeof image === "string" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "1.5rem",
              }}
            >
              <img
                src={image}
                width={imageDim[0] - 100}
                height={imageDim[1] - 100}
                alt="icon"
                style={{
                  padding: "0.5rem",
                }}
              />
            </div>
          ) : (
            image.map((e, i) => (
              <img
                key={i}
                src={e}
                width={imageDim[0] - 100}
                height={imageDim[1] - 100}
                alt="icon"
                style={{
                  padding: "0.5rem",
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
