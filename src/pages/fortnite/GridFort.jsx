import React from "react";

import GridItemFort from "./GridItemFort";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  return (
    <motion.div initial="hidden" whileInView="visible" class="container">
      <div class="row">
        <div class=" d-flex justify-content-center">
          <div class="card-grid">
            <motion.div variants={card} custom={1}>
              <GridItemFort
                imgSrc="./img/icon/fire.jpg"
                partoftheworld="EU"
                pr="62.000 PR"
                win="12.800$"
                name="fiR3hUNTER"
                prise={t("fortnite.card.fiR3hUNTER.cost")}
                firstLine={t("fortnite.card.fiR3hUNTER.firstLine")}
                secondLine={t("fortnite.card.fiR3hUNTER.secondLine")}
                thirdLine={t("fortnite.card.fiR3hUNTER.thirdLine")}
                fourthLine={t("fortnite.card.fiR3hUNTER.fourthLine")}
                fifthLine={t("fortnite.card.fiR3hUNTER.fifthLine")}
                sixthLine={t("fortnite.card.fiR3hUNTER.sixthLine")}
                seventhLine={t("fortnite.card.fiR3hUNTER.seventhLine")}
                indexToggle="ExampleNum1"
              />
            </motion.div>
            <motion.div variants={card} custom={2}>
              <GridItemFort
                imgSrc="./img/icon/shizo.jpg"
                partoftheworld="EU"
                pr="109.000 PR"
                win="66.000$"
                name="Shizoname"
                prise={t("fortnite.card.Shizoname.cost")}
                firstLine={t("fortnite.card.Shizoname.firstLine")}
                secondLine={t("fortnite.card.Shizoname.secondLine")}
                thirdLine={t("fortnite.card.Shizoname.thirdLine")}
                fourthLine=""
                fifthLine=""
                indexToggle="ExampleNum2"
              />
            </motion.div>
            <motion.div variants={card} custom={3}>
              <GridItemFort
                imgSrc="./img/icon/mers.jpg"
                partoftheworld="EU"
                pr="231.000 PR"
                win="100.000$"
                name="Merstach"
                prise={t("fortnite.card.Merstach.cost")}
                firstLine={t("fortnite.card.Merstach.firstLine")}
                secondLine={t("fortnite.card.Merstach.secondLine")}
                thirdLine={t("fortnite.card.Merstach.thirdLine")}
                fourthLine={t("fortnite.card.Merstach.fourthLine")}
                fifthLine=""
                indexToggle="ExampleNum3"
              />
            </motion.div>
            <motion.div variants={card} custom={4}>
              <GridItemFort
                imgSrc="./img/icon/gedz.jpg"
                partoftheworld="EU"
                pr="50.000 PR"
                win="5.000$"
                name="GEDZ"
                prise={t("fortnite.card.GEDZ.cost")}
                firstLine=""
                secondLine={t("fortnite.card.GEDZ.secondLine")}
                thirdLine={t("fortnite.card.GEDZ.thirdLine")}
                fourthLine=""
                fifthLine=""
                indexToggle="ExampleNum4"
              />
            </motion.div>
            <motion.div variants={card} custom={5}>
              <GridItemFort
                imgSrc="./img/icon/wul.jpg"
                partoftheworld="EU"
                pr="80.000 PR"
                win="20.000$"
                name="Wulfee"
                prise={t("fortnite.card.Wulfee.cost")}
                firstLine={t("fortnite.card.Wulfee.firstLine")}
                secondLine={t("fortnite.card.Wulfee.secondLine")}
                thirdLine={t("fortnite.card.Wulfee.thirdLine")}
                fourthLine=" "
                fifthLine=""
                indexToggle="ExampleNum5"
              />
            </motion.div>
            <motion.div variants={card} custom={6}>
              <GridItemFort
                imgSrc="./img/icon/win.jpg"
                partoftheworld="EU"
                pr="60.000 PR"
                win="21.955$"
                name="WingS"
                prise={t("fortnite.card.WingS.cost")}
                firstLine={t("fortnite.card.WingS.firstLine")}
                secondLine={t("fortnite.card.WingS.secondLine")}
                thirdLine={t("fortnite.card.WingS.thirdLine")}
                fourthLine={t("fortnite.card.WingS.fourthLine")}
                fifthLine={t("fortnite.card.WingS.fifthLine")}
                sixthLine={t("fortnite.card.WingS.sixthLine")}
                seventhLine=""
                indexToggle="ExampleNum6"
              />
            </motion.div>
            <motion.div variants={card} custom={7}>
              <GridItemFort
                imgSrc="./img/icon/sp1a.jpg"
                partoftheworld="EU"
                pr="78.000 PR"
                win="16.000$"
                name="Sp1aash"
                prise={t("fortnite.card.Sp1aash.cost")}
                firstLine={t("fortnite.card.Sp1aash.firstLine")}
                secondLine={t("fortnite.card.Sp1aash.secondLine")}
                thirdLine={t("fortnite.card.Sp1aash.thirdLine")}
                fourthLine={t("fortnite.card.Sp1aash.fourthLine")}
                fifthLine=""
                indexToggle="ExampleNum7"
              />
            </motion.div>

            <motion.div variants={card} custom={8}>
              <GridItemFort
                imgSrc="./img/icon/gf.jpg"
                partoftheworld="Asia"
                pr="107.000 PR"
                win="10.000$"
                name="GРFORTIK"
                prise={t("fortnite.card.GРFORTIK.cost")}
                firstLine={t("fortnite.card.GРFORTIK.firstLine")}
                secondLine={t("fortnite.card.GРFORTIK.secondLine")}
                thirdLine={t("fortnite.card.GРFORTIK.thirdLine")}
                fourthLine={t("fortnite.card.GРFORTIK.fourthLine")}
                fifthLine={t("fortnite.card.GРFORTIK.fifthLine")}
                indexToggle="ExampleNum8"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GridFort;
