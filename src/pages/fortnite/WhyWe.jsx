import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WhyWe() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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
  const textright = {
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
    <motion.div initial="hidden" whileInView="visible">
      {/* <div class="p-absolute-img">
        <img class="img-abs" src="./img/sloy_34_299.png" alt=""></img>
      </div> */}
      <div class=" bg-light d-s-js mt-asm color-black d-flex justify-content-center align-items-center">
        <div class="container ">
          <div class="row">
            <div class="p-absolute d-flex  justify-content-center align-items-center sdsd">
              <motion.h1
                custom={0.3}
                variants={titles}
                class="bold-Title-ds text-center Title-ds-sds mt-0"
              >
                {t("all.WhyWe-title")}
              </motion.h1>
            </div>
            <div class="col mt-3dt">
              <div class="grid-why-we">
                <motion.div
                  custom={2}
                  variants={imgleft}
                  class="img-width-div d-flex justify-content-center align-items-center pedding-tree"
                >
                  <img class="img-width" src="./img/sloy_34_299.png" alt="" />
                </motion.div>
                <motion.div
                  custom={1}
                  variants={textright}
                  class="d-flex align-items-center justify-content-center"
                >
                  <div class="text-why-we text-start">
                    <p>
                      <span class="green-text">IweR Trainings</span>
                      {t("fortnite.why.first")}
                      <br />
                      {t("fortnite.why.second")}
                      <br />
                      {t("fortnite.why.third")}
                      <br />
                      <br />
                      {t("fortnite.why.forth")}{" "}
                      <span class="green-text"> IweR!</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
