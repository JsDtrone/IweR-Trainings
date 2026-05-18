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
import "./Val.css";
import Spec from "./Spec";
import Nav from "../Nav";

const PageVAl = (props) => {
  return (
    <div className="">
      <div className="no-bg">
        <CSSTransition timeout={1000} classNames="bold-Title-ds ">
          <TitlesFort title="VALORANT" />
        </CSSTransition>
        <Spec />

        <GridFort />
        <PopularQ />
        <WhyWe />
        <Icon />
      </div>
    </div>
  );
};

export default PageVAl;
// {props.imgSrc}
