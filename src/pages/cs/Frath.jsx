import React from "react";
import { motion } from "framer-motion";

export default function Frath() {
  const imgleft = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
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
      class="d-flex  justify-content-between flex-container"
    >
      <div class="d-flex justify-content-center">
        <motion.div
          custom={2}
          variants={imgleft}
          class="quote d-flex align-items-center gfdug"
        >
          <img
            class="quote-img fdsdsaf jgifdghfudhgyu"
            src="img/cs-frafth.png"
            alt=""
          />
        </motion.div>
      </div>
      <div class="d-flex justify-content-end ">
        <div class="special-offer">
          <motion.div
            custom={3}
            variants={imgright}
            class="special-offer-block"
          >
            <img
              class="special-offer-img dhuytrbtcdeg"
              src="img/cs-frath2.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
