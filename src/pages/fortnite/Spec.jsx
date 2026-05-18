import React from "react";
import GridItemFort from "./GridItemFort";
import { useTranslation } from "react-i18next";

function Spec() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <GridItemFort
      imgSrc="./img/1212.webp"
      name="Secret coach"
      icon="./img/icon2.png"
      prise={t("fortnite.spec.prise")}
      istrue="fkd"
      firstLine={t("fortnite.spec.firstLine")}
      secondLine={t("fortnite.spec.secondLine")}
      fourthLine={t("fortnite.spec.fourthLine")}
      thirdLine=""
      indexToggle="ExampleNum12"
    />
  );
}

export default Spec;
