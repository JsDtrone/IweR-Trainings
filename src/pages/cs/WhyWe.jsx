import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function WhyWe() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const imgright = {
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
      <div class="bg-dark d-s-js color-white d-flex justify-content-center align-items-center">
        <div class="container ">
          <div class="row">
            <div class="p-absolute d-flex  justify-content-center align-items-center sdsd fsgdhhj mb-5">
              <motion.h1
                custom={1}
                variants={title}
                class="bold-Title-ds text-center Title-ds-sds mt-0 color-blue"
              >
                {t("all.answers-title")}
              </motion.h1>
            </div>
            <div class="col mt-3dt mb-5 pb-5">
              <div class="grid-why-we mt-5dt">
                <motion.div
                  custom={2}
                  variants={imgleft}
                  class="img-width-div d-flex justify-content-center align-items-center pedding-tree"
                >
                  <img class="img-width" src="./img/cs-ct.png" alt="" />
                </motion.div>
                <div class="d-flex align-items-center justify-content-center">
                  <motion.div
                    custom={1}
                    variants={textright}
                    class=" text-start color-white"
                  >
                    <p className="text-why-we">
                      <span class="color-blue">IweR Trainings</span>
                      {t("cs-go.why-we")}
                      <br />
                      <br />
                      {t("cs-go.become-pro")}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
