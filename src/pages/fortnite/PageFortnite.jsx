import TitlesFort from "./TitlesFort";
import GridFort from "./GridFort";
import GridItemFort from "./GridItemFort";
import AnswerQ from "./AnswerQ";
import AnwerQU from "./AnwerQU";
import WhyWe from "./WhyWe";
import Icon from "./Icon";
import Frath from "./Frath";

import React from "react";
import PopularQ from "./PopularQ";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6
import { CSSTransition } from "react-transition-group";
import Nav from "../Nav";
import { useTranslation } from "react-i18next";

const PageFortnite = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <CSSTransition timeout={1000} classNames="bold-Title-ds ">
        <TitlesFort title="FORTNITE" />
      </CSSTransition>
      <Frath />
      <TitlesFort title={t("all.trents")} />
      <GridFort />
      <PopularQ />
      <WhyWe />
      <Icon />
    </div>
  );
};

export default PageFortnite;
// {props.imgSrc}
