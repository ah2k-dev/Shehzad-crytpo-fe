import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
// import { faqsList } from "../../data";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/fade";

const Faqs = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="bg-faqbg bg-cover bg-center ">
      <div className="bg-blackcurrent-900/70 grid grid-cols-1 md:grid-cols-2 py-20 px-6  md:px-20">
        <div>
          <motion.p variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }} className="text-4xl text-white font-Baskervville mb-10">
            FAQ (Frequently Asked Question){" "}
          </motion.p>
          <motion.div variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}>

          <Accordion variant="splitted">
            {[1,2,3,4,5,6,7]?.map((value, i) => (
              <AccordionItem
                key={i}
                className="bg-slate-100/30 rounded-md text-white font-Baskervville border border-slate-400"
                aria-label="Accordion 1"
                title={`Q${value} : Loren ipsm of that way go on? `}
                >
                Lorem ipsm fo that way go on awfull might be great
              </AccordionItem>
            ))}
          </Accordion>
            </motion.div>
        </div>
        <div>
          <div>
            <motion.p variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }} className="text-4xl text-white font-Baskervville mb-6 text-center">
              Still Wondering?
            </motion.p>
            <motion.div variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}>

            <p className=" text-center text-white font-Baskervville mb-4">
              More Questions and Answers at the bottom of the ‘About Us’ page.
            </p>
            <p className=" text-center text-white font-Baskervville mb-4">
              Alternatively…
            </p>
            <p className=" text-center text-white font-Baskervville mb-4">
              You can email us at partners@tech.com
            </p>
            </motion.div>
            <motion.div variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }} className="flex justify-center">
              <div className=" bg-slate-50/10 border mt-10 border-slate-200/30 p-2 rounded-lg">
                <button className="font-Baskervville text-white px-6 py-2 rounded-lg capitalize bg-blackcurrent-600 hover:bg-blackcurrent-700">
                  Know More {" "}
                </button>
              </div>
            </motion.div>
          </div>
          <div className="mt-10">
            <motion.p variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}  className="text-4xl text-white font-Baskervville mb-6 text-center">
            I’m Interested, but would like to know more
            </motion.p>
            <motion.div variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}>

            <p className=" text-center text-white font-Baskervville mb-4">
              More Questions and Answers at the bottom of the ‘About Us’ page.
            </p>
            <p className=" text-center text-white font-Baskervville mb-4">
              Alternatively…
            </p>
            <p className=" text-center text-white font-Baskervville mb-4">
              You can email us at partners@tech.com
            </p>
            </motion.div>
            <motion.div variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }} className="flex justify-center">
              <div className=" bg-slate-50/10 border mt-10 border-slate-200/30 p-2 rounded-lg">
                <button className="font-Baskervville text-white px-6 py-2 rounded-lg capitalize bg-blackcurrent-600 hover:bg-blackcurrent-700">
                  Contact Us{" "}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
