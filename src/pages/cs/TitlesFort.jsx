import React from "react";
import Frath from "./Frath";
import { motion } from "framer-motion";

function TitlesFort(props) {
  const title = {
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
    <motion.div initial="hidden" whileInView="visible" class="bg-cs-go pb-5">
      <div class="container pb-5">
        <div class="row">
          <div class="col text-center align-items-center">
            <motion.h1
              custom={2}
              variants={title}
              class="bold-Title-ds bold-Title-dss text-white"
            >
              <img src="img/iwerlogo.png" alt="" className="iwerLogo  " />
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
