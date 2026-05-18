import React from "react";
import { motion } from "framer-motion";

function TitlesFort(props) {
  const titles = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div initial="hidden" whileInView="visible" class="container">
      <div class="row">
        <div class="col text-center">
          <motion.h1 custom={1} variants={titles} class="bold-Title-ds ">
            {props.title}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
export default TitlesFort;
