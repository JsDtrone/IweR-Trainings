import React from "react";
import { motion } from "framer-motion";

export default function Icon() {
  const icon = {
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
      className="bg-old-yellow pt-3 pb-3"
    >
      <div className="container ">
        <div class="row icons-panel pb-0 d-flex justify-content-center align-items-center">
          <div class="col">
            <div class="faw-icon-block d-flex justify-content-center">
              <motion.a
                custom={1}
                variants={icon}
                className="no-decor"
                href="https://twitter.com/IwerTrainings?t=ijN5T56zKwix4aLvkMmTJA&s=09"
              >
                <div class="round-icon d-flex align-items-center justify-content-center  yellow-border">
                  <img
                    src="./img/wes.png"
                    alt="vkIcon"
                    className="vkOcin color-yellow"
                  />
                </div>
              </motion.a>
              <motion.a
                custom={2}
                variants={icon}
                className="no-decor"
                href="https://twitter.com/IwerTrainings?t=JIdQ66DnzvfxYuv7oYuXoQ&s=09"
              >
                <div class="round-icon d-flex align-items-center justify-content-center yellow-border">
                  <i class="fa-brands fa-twitter  color-yellow"></i>
                </div>
              </motion.a>
              <motion.a
                custom={3}
                variants={icon}
                className="no-decor"
                href="http://"
              >
                <div class="round-icon d-flex align-items-center justify-content-center yellow-border">
                  <i class="fa-brands fa-discord color-yellow"></i>
                </div>
              </motion.a>
              <motion.a
                custom={4}
                variants={icon}
                className="no-decor"
                href="mailto:iwertrainings@gmail.com"
              >
                <div class="round-icon d-flex align-items-center justify-content-center yellow-border">
                  <i class="fa-regular fa-envelope fa-solid color-yellow"></i>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
