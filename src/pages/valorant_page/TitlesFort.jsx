import React from "react";
import { motion } from "framer-motion";
import Frath from "./Frath";
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
    <motion.div initial="hidden" whileInView="visible" class="bg-white-img">
      <div class="container">
        <div class="row">
          <div class="col text-center align-items-center">
            <motion.h1
              custom={1}
              variants={titles}
              class="bold-Title-ds bold-Title-dss "
            >
              <img src="img/logo_iwer_95.png" alt="" class="iwerLogo" />
              {props.title}
            </motion.h1>
          </div>
        </div>
        <div className="row">
          <Frath />
        </div>
      </div>
    </motion.div>
  );
}
export default TitlesFort;
