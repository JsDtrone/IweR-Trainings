import React from "react";
import { motion } from "framer-motion";

export default function Frath() {
  const imgleft = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const imgright = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      class="d-flex  justify-content-center  fsdbjkui"
    >
      <div class="d-flex justify-content-center pt-5 ">
        <motion.div
          custom={2}
          variants={imgleft}
          class=" d-flex align-items-center gfdug khkf"
        >
          <img class="fdsdsaf khkf yrnsxbzvcxbd98" src="img/val.png" alt="" />
        </motion.div>
      </div>
      <div class="d-flex justify-content-center ms-5 dtms">
        <motion.div custom={1} variants={imgright} class=" dt-img">
          <div class=" dt-img">
            <img class=" dt-img gthxcvbn56" src="img/Без имени-2.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
