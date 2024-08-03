

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutSideClick";
import { ShoppingCart , Heart} from 'lucide-react';
import { Button } from "@nextui-org/react";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(
    null
  );
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-md overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className=" overflow-auto h-fit scroll-bar">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
                <motion.p
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm w-full font-bold  text-slate-600"
                  >
                    <span className="text-slate-400">Price : </span>
                    $ 300.00
                  </motion.p>
                  <div className="flex items-center">
                    <Button className="p-2 bg-blackcurrent-500 w-full text-white hover:bg-blackcurrent-600"><ShoppingCart className="me-2"/> Add to cart</Button>
                    <Button className="p-2 bg-slate-200 w-full"> <Heart /> Add to favourite</Button>
                  </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className=" w-full    grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col    hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  
                  
                  src={card.src}
                  alt={card.title}
                  className="h-50 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                

                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className=" font-medium text-neutral-800 dark:text-neutral-200 text-start "
                  >
                  {card.title}
                  
                </motion.h3>
                
                
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 line-clamp-2 dark:text-neutral-400 text-start text-sm"
                  >
                  {card.description}
                </motion.p>
                <motion.h3
                  
                  className=" font-medium text-neutral-800 dark:text-neutral-200 text-end my-2"
                  >
                  $ 300.00
                  
                </motion.h3>
                    
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="flex gap-3 items-center justify-center px-4 py-2 text-sm rounded-md font-bold bg-gray-100 hover:bg-blackcurrent-600 hover:text-white text-black mt-4 md:mt-0"
            >
                <ShoppingCart />
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "POEDAGAR Men Watch Luxury Business Quartz Watches Stainless Stain Strap Sport Chronograph Men's Wristwatch Waterproof Luminous",
    title: "POEDAGAR Men Watch",
    src: "data:image/jpeg;base64,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",
    ctaText: "jjjj",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "IELGY shoes for men summer trend casual shoeswhite sneakers",
    title: "Size 47 Men's Shoes",
    src: "data:image/jpeg;base64,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",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Earrings golden Color Women Earings Fashion Jewelry Matt Gold Piercing ",
    title: "Earrings golden Color",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdJgq0n5ya2Ivyq-Hwo9hpjmWAO4zHG3TNg&s",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "High performance powerful motor., Grinding Jar: 0.3L ,0.8L & 1.25L Stainless Steel., OLP provided safety of motor, Sturdy ABS body,",
    title: "Carina 500W mixer grinder",
    src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUWFhYSFhUXFRgVGBgYGBUXFhUYFxUYHiggGBolGxUVITEhJSkrLi4uFx8zODMwNygtLisBCgoKDg0OGxAQGismHyUtLS0tLS8tLS8tLi0tLS0tLS0tLS0rLS0tLS0rLS0tLS0tKy0tLS0tLS0tLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcDBAYIAgH/xABSEAABAwIDAgoEBwoMBgMAAAABAAIDBBESITEFBgcTQVFhcYGRobEiUsHRFDJicoKSsggjJUJTc6LC4fAkM0NEVGWDo7O00vE0Y2R0pMMVFib/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAsEQADAAIBAgQEBgMAAAAAAAAAAQIDESESMQQTQVEiYaHRFDKBscHhQlKR/9oADAMBAAIRAxEAPwC8UREAREQBERAEX5dft0AREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAWhXbRa1hLXAkaaka25Fvrm6ulZ8NthFjExxAFgTikBJ7AF1dzlb1wRtZtWd384LPmtaPPNRE5lOtZJ4Ka3HoGSR1BkGItratgJJNmtmcGNHMA2wAXRHYdP+THeferllS9DJfhXfen9fuVu7ENat/79q/OMP8AS3fv9JWDUbv0tiTENCdTzda8wbk7Snlr6WOSeVzHzxtc0yOIILgCDmpeevYo/AP/AG/f7lwslfyVbu8/6lvU1ZONK09tj5uU/HsCn9T9J3vW1Hu/T+qfru96PKvb9iU+Cpf5fV/cj6PbE4+NURvHSwfquC6Oj2gxzA4vYCflDntyqH2jurA5ptJNFYE4mTSC3PcF1lT1BvVJTVb3Me6pjDrME73uyF7EDFYHPp5FXxXZF+3hXxPg9Bxytd8VwPUQfJfa4Dd3hKppSGzRfB3HLELOZ2uABHaLdK72N4cAWkEEXBBuCOQgqFS57l8ZJtbln0iIokwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKCrxasYeeK3c93+pTqgdrm1VD0seO5zfeuo4zV3Fd/xrfVr6gd4Y/wDWXULlNxxaXaQ/69zvrU1OV1a4dNbaB+9v+Y77JXkbg/H4So/z8fmvW21D95k/Nv8AsleTODkfhOk/PNPdcoD1NCVvQqPgKkIVJnCD4Rq0w7PncDYuAjH0zY/o4l54ZTvc10jWOLAfScGktGQ1cMgrr4bajDQsHrTtHcyQ+xbfBHR8XREW+M4OPWYo8XjdSmunkz5I8ynPyKLgnLVanBtvMWWie4mM8hPxCeUcw5x29e5wmbhxOifV0zAyRgL5GNFmvaM3ODRo4DPLXPlVcbrVBbIB0haE1kkxdNYMh6TRR+wJcVPGeYYe42HhZSCyNaPVT2thERcOhERAEREAREQBERAEREAREQBERAFA7wZT07vzje/AfYVPKE3ob6ML/VlHcWuHnZAaW6rcNZtJvPNBN2Ppo2+cZXULldk+jtSo/wCbR0zx0mKWoY7u4xneF1SA0trfxMv5t/2SvKPBi2+1KT84T3McV6v2kLxvHyHD9EryvwTNvtal65D3QyH2ID0vCpKBR0QzUjDopkSuuHV38FgaNTMbD+zcP1l124keGl/tJLdWM28Fx3DJIC+gj55nPPUDGD5ld3uhEW0cAOpYHH6WftXH2IT+ev0JKrtxb8XxcLr9Vjdead3h99HYr9372iIKCofexLDG35z/AEBbvv2Kjt2Kcl97alXYFw2ZPGPdyi+N1Afgzb8tyOr/AHuphamyqcxwsYdQ0X69SttUU9s3StJIIiLhIIiIAiIgCIiAIiIAiIgCIiAIiIAoveWO9M8+rhk+o4OPgCpRY6iEPY5h0c0tPURYoDki/DtChk5JIaqmPS77zOwd0Mi7FcBWSkU0Ezh6VJVQvdno0uNPOT0Bksh+iu+C6zhq1ebT1HyXmLgYhvtWO+rWSntwFvtXp2flXnPgbi/C8vyY5/8AEY32oC/YgpCNaMK3m6KRwqrhUcZNo0cQ1Ebj2vcWjxAVt08QYxrRo1oaOwWVcVezzPt2NxBwxxMIPIcBfI7ucYx2rvNv13EU003KyNzh0ut6I7XWC4+eCM8bbKr4Wd4fhEzaOI3ZEcUhGhk0t9EX7SeZbPBtsEvkElrMjLXE21Oob+/tUDufutLUvs2+EG8khzA5T1u6Fd2zKBkEbYoxZre8nlJ6VddKJ6UZMMVkvzKNpERZzeEREAREQBERAEREAREQBERAEREAREQBERAcltCiZxs9NIPvVSx2XQ8FsgHTe5+kFIbp7QdJTtbKfv0V4Jvzkfol1uZ4wvHQ8LLvQ1hgeXWDmjE05Ym5i5adQqgdtaobNI6Orc0kNaT6BxAXte4zI0vryKcy6XBXVzL5LsqCqD4KafDtiu+RxzP78f6Vm2pvTtBjbiscfoR+xq5DZm0J4ZpJopcMkpJkdhBuS4uOR0zK75dEXnxr1PS8DxzrLPVtAOaoSn3orTrVEdTGD2KWo6+WXKSpkf0AgeDQpeWyK8RjfZllbnDjqioqtWi1PGeQ4TilI+lhH0V0O2dmMqYjDIXBhLScJsThcHWvzXAXzsAMFPE1thaNlwLZHCL3A5b3UgquzL9JowUdJHEwRxtDGjRoFh+09Kzoi4dCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC+JZMIJPIvtR21ZdG9p9i6kcp6RDV1nEucAT1KPmpIzq0HsW7KbnqzWGRXoxVyyCraCL8kz6jfctI0cQ/k2fUb7lK1y0Cc1dPYx29MyU1NH6jfqhS1NAz1QoyEqTp3KNFmN+5K0juLIc0WtqByjlXTRvBAI0Oa5SF6m9jTZFnq5jqP7VntepvxV6EkiIqy8IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKBrZLknn8uRTFY+zD3d+S56rd7lOEVZXwa45+dale15aRGQHc508luFYXq1GWuUc1tOKoxAtkaLNFwRcF2LM6XAwnLPUBRk76gG2OLO4GTr5kgHQ25PFT9cc1Gywtd8YX08NMu0q+TBkXIoTLi9N0ZaL5Nve98r9inKdyh6enY03a0A84CkoHLlIniZLQuUlRS4ZGnkPonqP7bKHhct5pyVDRuijqXvAFyQB0myia7eOGM4blxHMMu9fG06Z0jGStJu0ZDI5uFjkcv31XLFrXPkjwhz4y0PFntILmhzb2BBu0g5EqMzPqW5clr8qJuTe9nI0+Ch5t4ZycpzbmwNHksElG31HDqc32rUkZGNS4deH3q6ZhGK8mZ93/BIR7fnGs5+qD5hStLvYA0B5c48rsIF+wLmWtjOjnHqw+9ZY4Iz657WhdcQyMZMqfDO0o944365eCmI5ARcFV/DABpFIenBI/wCyLLUn38p4X/BniZmEhznCNp5dAC4EaKioXobceW9bpFnIoHYG9FJU+jFUBz/UcDG7sa4Ansup5VtaNKpNbQREXDoREQBERAEREAREQEVvG+TirQ4eM1aH3w5W1tnoSuPbtyXE1s9LJGfWbaSPrxC1l2G1X+lbmHmoZ59LsV0a0ZMybraZCyb00YJa6YNIyOJrx42stunrY5W44nte25GJpuLjULYnia74zQesA+a1xSsAs1oaOZvojuCnwUfF6kZVnMrTcVl2zUxxZAFzubEQB1n2LmX7ZeD6TARzAvB8SVaqRmvHXc6CapZGMUj2sbpicQ0Z9JWOPeOkH84j7HX8ligEU7L2D2nUO9KxHODyrcp6KIaRMHUxvuXWRl6M43iga3EHOfnazGOcT2L9h3hnf/E0Ux+VIWxN8SbrdpwBpl1ZKQgVdaNEK33f0J+ifeDqcB4j3qL2G0f/ACNe22rKOX6zJWf+lbmzn+jI35ru4rS2ebbWmHJJRU7u2Oeoaf8AEb3rNXc9KHuTqQ0KlvulABFR2A+PL9liuolUn90p/F0fz5vssUSZKcATWnZhuASKiXUfIiKs2NgGgHcqu4Aj+DX/APcyf4cSs+Jy6DJX1HFxPk9Vpd4ZLzLtyrL6mVxN7ut3Ae2/er44Sq4xbNqHA2JDWA/Oe1vkSue3T3FoJaGN9TH98exsj5TI5rsTmBxzvblUoensqzQ7jSKnoKmzhfnyKuncXepz8MM7sV8o5DrfkY88p5j2FV5vhuU2nOKkqGVEZNsONhlZ1huTh0gDq5V87rPkacMjXAdII7brQ5VI87FkeO9HoFFo7FqDJAxxNzaxPOQbE+C3lkZ6qewiIh0IiIAiIgCIiAgtoPu93XbuyUadStqZ9yTzknxWmD5q5GS3yfLlp7SqOLYXDXQdf73PYtsrld9to8U0n1W3HznGw9imipnN7b2syO4N3O1IHJf1jyXUFPtcgjHGW4gHDO+R0Oi392thPqW3lcRG99xpieb2cbnQai+uunLP79bFZJJHI30XAcWNCLNc7DdvKppb4KLypLqfYidgV4DgQfRdkf36F2UZVY0kboZcD3DEXEFuueodfp9o6bWJsyXFG09ncpIrv3JeFy36dyjISt6FyhSLsbJrZrvSI9Zjh4XWm422rSu/KUdUz6ktM8faKzbNfaVnXbvFlh2rdlVQP5qiSBx5hJBLb9NkY7Qs99zfhe0dXIVS/wB0f/E0nRJL9lvuVyPKp77olv8ABqZ3NM4d8Z9yiXG7wEC2zD01Eh/QjHsVkCZrdTZV1wIi2zG9Msp8QPYu3r6fEAQbE+jpcZg9x6l1EabS4IXeParZgYXRBzLh1ntuCQciWnI2OeahXVEnJIQNLclua2llLbNpKianinZhc2WJkoa7JwD2hwB5Li6w1GzJ+Wm+q4exao6V2PLzLLXff1/ggZqfEbkjsAHgFkpi6P4hDekAX+ta605ds04kMRewSBxjLONGIPBwluG973yspZlBL/RpO249qt6loxeU09pPf6/YkdlbxTRZXDm8xHeuz2ftuKVoN8J0sefrXF02xpz/ACAHznN/3WpvHtgUGDj7uL3CMMZnhBBJdmRoGnuWfJMM9Hw9ZZXO9fP+y0QV+rid0N8KB4EbJntcbANlbgHYRdtz15rtQVna0zfFqltH6iIuEwiIgC+JTZpPMCfBfaw1hsx3zT5IcZzbzktZpyWaU5FYORaEYqF1XnCQTZ3zmd2Ee1WBdctvxs/Gwv5CMLuj1T+/MFJFddjHuO9roqcjQNa0/Obk7xBWbebNrLal583Ku9l7VqKJ/oEEXuWuBLT0i1iDYe8FbW1t7J5bWaxlr2IJda+eV9D13VkvT2Zcs9UOV6n3vDUMNUQBdw4tt7DUAYs9ejsXV7AdeP6XsCr3Z1O9zwbEuJyHKSeX9qsnZ0HFsa3lGp6eVJO20lok4it6Fyjoyt2Fy5RKGSlK+z2Hmc3zWTfmMtgkkAJMLo6xobqeIkbK5o6wxw+ktSB+Y6x5qS37bUcU10GL0S4vwgOyI5WkG4We1yj0MNaTZM8aHAOabggEHnBzBVT/AHQTb0MJ5qlvjFJ7lg2RvlV00TIAI5GRjAzFia4NGTW3F72FgOgBQ3CBvJLX0wgdA1hEjZA4PxfFDhaxA9ZccV7FizY36nYcDItsuHpdKf71w9i7uYeiPnD3KmNzd8X0VJHSinDzHj9LjMIOKRz9LH1rdi67YW+09TMyJ0McbCcyHOc7IEi2QGoCKK9h5sPhNHaboMtRUzfViYz6ow+xSrlE7oO/gjB6rpmfUnkb7FLPUSZ5V2iPw7IP6xP+ZXpsLzRXN/D7h/WVv/KXpdJOm3EqG4Udo8bW63DcdvrYG+DD3q8WyWuTyAnuVU8G+6lPtL4RUVbXuOPAyz3NsPjZW1zcRmpJ6eyGSXUtI4OiqrFWluBvU9lo3uLouY5lnS3o6O7pid8uCp9Ox09G90rGjE6NwHGADUtLQA+3NYHrXI7A2gWuGau4tGBdWKuT00xwIBBuDmCv1c5uPXmSEgm+G1uo3y7we9dGszWno9GXtbCIi4SCxVMeJjm6XBF/JZUQFTV29b4nFkkINiRdrsPgQfNY278QfjRyjsaf1l8cI+zzHUOdazX+m08hvr43XAzlbISaPJzXUU0WEd9aTneOth9i+JN8aQggvNjkQWOz8FWzisbypdCKPPpnS7TkoH3MczmXzwmNzm9mQI8VFtgpr51DR1ROuoclfN00d6mztNnV9FF8V+Z1cQ4nyy7FvjeOm/Kfou9yr0L9uu7IaLEbvTSj8dx6mO9oX2zfGAaNkd2AeZVdtW5StzQ7NNPgs/YG13VM0cbGYQ5wBJNzhGburIFd7vds2Soo5oYiBI9owkktFw4O1GY0XJcF+xni9Q9pDcOFlxa5Orh0WFr9KsVZMlfFwevhj4OfU85VkTmiMG99HZ9uZ5dVrTN8iu63o3NqTI58LWyMLi4AODXAHkIdYdxXMVe7la0/8LNyjJhd5LSqT9TBeOpbWmQQAFupS2707mVAe3VpBFzlyX7MyviLdquJFqSbmzYR5qe2LuVWl93RiIZZvcDpzNaST4LrqddyuIvq4l/8Ow3G3jprS07pWscJpZGNkIYXNmeZsr5HC57m5X+KDyrsi7K+o5+RUdvNDC2olgZidxQwnG1vIBoQcxnzBc/BZtywuZzlrnM8ln8vfY3vxKT00aVUz/8ARkf1mP8AMgr0c1ecTTjjeMu7HfEJA9wff1g+979N1vmpJFnTSPHy5Xv+0SixM7+Kj5ly72bww00D8UjBI5paxpcASSLDLW3YsnBNs9kWz2YHYi4uLjYj0g4hwsc7A316FSLmQhovZjSRdwYTlmcgMycivR27ez2QU7I4y4tzku7W7yXnTTN2ija0izFl63wuCTXmzeiCOLaNQ2L4jZnWHMb3cB0B1x2K/wDejafwaknqBa8cbnNvoX2swdri0dq81MDnOuSXOcblx1c4m5J6SST2qWHuU+Ma6UvUujgnnLmy5ZANz6c7e1WCuZ4PtimlpGteLSPPGOHKL5Nb2Ad5K6ZQt7o0YU1CTCIigWBERAau0NnxTsMczGvaeQ8nSDqD0hVlv3uDDT08lTC+QYLExmzhYuAydqLX5bq05ZLdag95qSWop5IY5REXjCXFgkbhOTmlp1BGSnNNPgqyY5taaPNs1Y1utwptu7FY4AiAkEXHpM0Ivpiy6ipp3A3UF1zVxgX5InE9xdZWHs3YkkbWNfIZHNFi8gAuNtSBkrHmZmnwUa5ZT0m61aDb4NJfoAPksf8A9Zrc/wCDS5a+irzkpnjkB5sli4p/qLnmsn+Cj3ZTEe59edKZ3a5jfNwUPXwuhkfDKMMjCA5tw6xIDhmCQciNCvQraR5zACr3fDg5rqqodMyWCxsBcOYbDQOLQcRHOnms4/BxrhnO7jbuNrpC10hja3DchoJOI2Gpy0Vy7D4PqGms4RmV4/GlOLubk3wXK8Hu41TROe6aeNzXgXYxhJxDQmR1jYC+VrZqxYi4cqjVtlmLBELtybwC/JdCvmKS6TKs0GthTCvtFIiY8KYVkRAVlwibFiimFQ1pDpgQ83JBLcIvbQZYe5Vu0ZO63K/94NlR1LRHICQMwQbEHoK4aq4MdeKqCL3Nnsvr0tI8ldFrXJjzYadblFZE5N6ivhoyPUu9dwXVGQ+ERWF/xXLPTcFj/wAepFvkxnzLvYp9clHkZPYgtz9iRVcsMEoJa4kusSDZrXnUL0CxoAAGgyXGbp7qQ0bw9pc51iMbzoCLZAAALtFRkrbN+COiee5yXCbs6oqKMQU8Ze6SWMOAIFmtu+5LiABiaxRm5HBy2mImqS2SUZtYM2MPIbn4zvAeKsBFFU0tEnjl11MIiKJYEREAREQGB8ZJuvwwLYRAavwdfop1sogNY0/Qvz4OtpEBriDoTiSthEBrcSV+8UVsImxoxRMIK+3NuvpEBj4tOLWREBj4pOLWREBrOp804hbKJsGt8HX58HW0ibBq/B1tIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "High Speed Table Fan for Cooling with Automatic Oscillation (400 mm, 55W, White)",
    title: "High Speed Table Fan ",
    src: "data:image/jpeg;base64,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",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
 
];