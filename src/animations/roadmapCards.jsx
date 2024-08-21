import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RoadmapCard = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1, // Adjust this value as needed
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
    //   initial={{ opacity: 0 }}
      animate={controls}
      style={{ marginBottom: '20px' }}
    >
      {children(inView)}
    </motion.div>
  );
};



export default RoadmapCard;
