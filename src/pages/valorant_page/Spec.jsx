import React from "react";
import GridItemFort from "./GridItemFort";
import { useTranslation } from "react-i18next";

function Spec() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="bd-cool pt-5 pb-5 borderred">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center alight-items-center">
              <GridItemFort
                imgSrc="./img/roundzz.png"
                name="roundzz"
                icon="./img/icon2.png"
                prise={t("valorant.card.Roundzz.prise")}
                istrue="fkd"
                firstLine={t("valorant.card.Roundzz.firstLine")}
                secondLine={t("valorant.card.Roundzz.secondLine")}
                fourthLine={t("valorant.card.Roundzz.fourthLine")}
                thirdLine={t("valorant.card.Roundzz.thirdLine")}
                indexToggle="ExampleNum4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spec;
