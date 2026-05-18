import React from "react";
import GridItemFort from "./GridItemFort";
import "./img/pryamougolnik__skrugl._ugly_3_kopiya_7_125.png";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const GridFort = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
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
  return (
    <motion.div initial="hidden" whileInView="visible" className="bg-cool">
      <div class="container">
        <div class="row SGYF">
          <motion.div
            custom={2}
            variants={imgleft}
            class="col-6 mt-5  val-items-ds d-flex justify-content-center"
          >
            <img
              src="./img/Без имени-3.png"
              alt=""
              className="p-relatives dssimg"
            />
          </motion.div>
          <div class="col-6 text-center top-grid val-items-ds">
            <div class="row ">
              <h1 class="bold-Title-ds treinrs color-red mb-5 mt-1">
                {t("all.trents")}
              </h1>
            </div>
            <div class="row">
              <div class=" game-grid  yuyith">
                <motion.div variants={card} custom={1}>
                  <GridItemFort
                    imgSrc="./img/facepalm.png"
                    name="FacePalm"
                    icon="./img/icon1.png"
                    prise={t("valorant.card.FacePalm.prise")}
                    firstLine={t("valorant.card.FacePalm.firstLine")}
                    secondLine={t("valorant.card.FacePalm.secondLine")}
                    thirdLine={t("valorant.card.FacePalm.thirdLine")}
                    indexToggle="ExampleNum1"
                  />
                </motion.div>
                <motion.div variants={card} custom={2}>
                  <GridItemFort
                    imgSrc="./img/g31god.png"
                    name="g30rg1kGod"
                    icon="./img/icon1.png"
                    prise={t("valorant.card.g30rg1kGod.prise")}
                    firstLine={t("valorant.card.g30rg1kGod.firstLine")}
                    secondLine={t("valorant.card.g30rg1kGod.secondLine")}
                    thirdLine={t("valorant.card.g30rg1kGod.thirdLine")}
                    indexToggle="ExampleNum2"
                  />
                </motion.div>
                <motion.div variants={card} custom={3}>
                  <GridItemFort
                    imgSrc="./img/roundzz.png"
                    name="Roundzz"
                    icon="./img/icon2.png"
                    prise={t("valorant.card.Roundzz.prise")}
                    firstLine={t("valorant.card.Roundzz.firstLine")}
                    secondLine={t("valorant.card.Roundzz.secondLine")}
                    fourthLine={t("valorant.card.Roundzz.fourthLine")}
                    thirdLine={t("valorant.card.Roundzz.thirdLine")}
                    indexToggle="ExampleNum4"
                  />
                </motion.div>
                <motion.div variants={card} custom={4}>
                  <GridItemFort
                    imgSrc="./img/ezbz.png"
                    name="EZBRZY"
                    icon="./img/icon2.png"
                    prise={t("valorant.card.EZBRZY.prise")}
                    firstLine={t("valorant.card.EZBRZY.firstLine")}
                    secondLine={t("valorant.card.EZBRZY.secondLine")}
                    thirdLine={t("valorant.card.EZBRZY.thirdLine")}
                    indexToggle="ExampleNum3"
                  />
                </motion.div>
                <motion.div variants={card} custom={5}>
                  <GridItemFort
                    imgSrc="./img/NRZaCnTaM7w.jpg"
                    name="R4VE"
                    icon="./img/icon2.png"
                    prise={t("valorant.card.R4VE.prise")}
                    firstLine={t("valorant.card.R4VE.firstLine")}
                    secondLine={t("valorant.card.R4VE.secondLine")}
                    fourthLine={t("valorant.card.R4VE.fourthLine")}
                    thirdLine={t("valorant.card.R4VE.thirdLine")}
                    indexToggle="ExampleNum6"
                  />
                </motion.div>
                <motion.div variants={card} custom={6}>
                  <GridItemFort
                    imgSrc="./img/iWVnk4l9_Rs (1).jpg"
                    name="ODINN"
                    icon="./img/icon2.png"
                    prise={t("valorant.card.ODINN.prise")}
                    firstLine={t("valorant.card.ODINN.firstLine")}
                    secondLine={t("valorant.card.ODINN.secondLine")}
                    thirdLine={t("valorant.card.ODINN.thirdLine")}
                    indexToggle="ExampleNum7"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GridFort;
