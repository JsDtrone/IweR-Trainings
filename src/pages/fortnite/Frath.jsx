import React from "react";
import Spec from "./Spec";
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
      class="d-flex  justify-content-between flex-container"
    >
      <div class="d-flex justify-content-center">
        <motion.div
          custom={2}
          variants={imgleft}
          class="quote d-flex align-items-center"
        >
          <img
            class="quote-img sfdfkjhgudg7cgf"
            src="img/chto_by_igrat_luchshe_nado_uchitsya_u_luchshikh__143.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        custom={1}
        variants={imgright}
        class="d-flex justify-content-end special"
      >
        <div class="special-offer">
          <div class="special-offer-block">
            <Spec />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
