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
      <div className="bd-cools pt-5 pb-5 borderreds">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center alight-items-center">
              <GridItemFort
                imgSrc="./img/kensi.png"
                istrue="fkd"
                name="KENSI"
                win="$31.000"
                elo="4000"
                role={t("cs-go.card.KENSI.role")}
                icon="./img/icon1.png"
                prise={t("cs-go.card.KENSI.prise")}
                firstLine={t("cs-go.card.KENSI.firstLine")}
                secondLine={t("cs-go.card.KENSI.secondLine")}
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
