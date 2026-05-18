import React from "react";
import GridItemFort from "./GridItemFort";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const GridFort = (props) => {
  const card = {
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
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
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
    <motion.div initial="hidden" whileInView="visible" className="bg-dual">
      <div class="container">
        <div class="row SGYF pb-5 pb-4dt">
          <div class="col-6 text-center top-grid val-items-ds">
            <div class="row ">
              <motion.h1 class="bold-Title-ds treinrs color-blue mb-5">
                {t("all.trents")}
              </motion.h1>
            </div>
            <div class="row d-flex justify-content-center">
              <div class="game-grid game-grid-fdsd">
                <motion.div custom={1} variants={card}>
                  <GridItemFort
                    imgSrc="./img/kensi.png"
                    name="KENSI"
                    win="$66.000"
                    elo="4500"
                    role={t("cs-go.card.KENSI.role")}
                    icon="./img/icon1.png"
                    prise={t("cs-go.card.KENSI.prise")}
                    firstLine={t("cs-go.card.KENSI.firstLine")}
                    secondLine={t("cs-go.card.KENSI.secondLine")}
                    indexToggle="ExampleNum1"
                  />
                </motion.div>
                <motion.div custom={2} variants={card}>
                  <GridItemFort
                    imgSrc="./img/mds.png"
                    name="MDS"
                    win="$31.000"
                    elo="4000"
                    role={t("cs-go.card.MDS.role")}
                    icon="./img/icon1.png"
                    prise={t("cs-go.card.MDS.prise")}
                    firstLine={t("cs-go.card.MDS.firstLine")}
                    secondLine={t("cs-go.card.MDS.secondLine")}
                    indexToggle="ExampleNum2"
                  />
                </motion.div>
                <motion.div custom={3} variants={card}>
                  <GridItemFort
                    imgSrc="./img/lill.png"
                    name="lollipop21k"
                    win="$40.000+"
                    elo="4700"
                    role={t("cs-go.card.lollipop21k.role")}
                    icon="./img/icon2.png"
                    prise={t("cs-go.card.lollipop21k.prise")}
                    firstLine={t("cs-go.card.lollipop21k.firstLine")}
                    secondLine={t("cs-go.card.lollipop21k.secondLine")}
                    // fourthLine=""
                    indexToggle="ExampleNum3"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            custom={2}
            variants={imgright}
            class="col-6 mt-5 d-flex justify-content-center wd-100 pt-5 pt500n"
          >
            <img src="./img/cs.png" alt="" className="position-absolute" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GridFort;
