import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function GridItemFort(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const imgright = {
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
  let indexToggle = "#" + props.indexToggle;
  if (props.istrue == "fkd") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="card-grid-item"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={indexToggle}
      >
        <motion.img
          custom={1}
          variants={imgright}
          src="./img/novinka__144 (1).png"
          alt=""
          className="card-grid-itemfsdf gfsbhryjsfgadr"
        />

        <div
          className="modal fade "
          id={props.indexToggle}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn-close-DIV d-flex justify-content-center align-items-center"
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <button type="button" className="btn-icon">
                <img src="./img/valicon.png" alt="" />
              </button>

              <div className="grid-card-tren">
                <div className="modal-width ">
                  <img src={props.imgSrc} alt="" className="modal-width-tn " />
                </div>
                <div className="body-tren">
                  <div className="b-t-i color-black body-tren-header d-flex align-items-end just idng">
                    <div className="info d-flex justify-content-between align-items-center">
                      <h1 className="tren-name">{props.name}</h1>
                      <img className="ms-4" src={props.icon} alt="" />
                      <div className="d-flex heisa align-items-center"></div>
                    </div>
                  </div>
                  <div className="b-t-i color-black body-tren-text text-start d-flex align-items-center text-of-card-to-buy just ">
                    {props.firstLine}
                    <br className="brd" />
                    {props.secondLine} <br className="brd" />
                    {props.fourthLine}
                    <br className="brd" /> <br className="brd" />
                    {props.thirdLine}
                  </div>
                  <div className="b-t-i color-black body-tren-price  d-flex align-items-center just dkhnjjhf">
                    <h1 className="priseRub"> {props.prise}</h1>
                    <a
                      className="buy d-flex align-items-center justify-content-center bg-new-red"
                      href="how-to-buy-valorant"
                    >
                      {t("all.buy")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  } else if (props.fourthLine !== undefined) {
    return (
      <div className="card-grid-item">
        <img className="coh-img" src={props.imgSrc} alt="" />
        <div
          type="button"
          className="play-better flare-button bg-new-red"
          data-bs-toggle="modal"
          data-bs-target={indexToggle}
        >
          {t("all.play-better")}
        </div>
        <div
          className="modal fade "
          id={props.indexToggle}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn-close-DIV d-flex justify-content-center align-items-center"
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <button type="button" className="btn-icon">
                <img src="./img/valicon.png" alt="" />
              </button>

              <div className="grid-card-tren">
                <div className="modal-width ">
                  <img src={props.imgSrc} alt="" className="modal-width-tn " />
                </div>
                <div className="body-tren">
                  <div className="b-t-i color-black body-tren-header d-flex align-items-end just idng">
                    <div className="info d-flex justify-content-between align-items-center">
                      <h1 className="tren-name">{props.name}</h1>
                      <img className="ms-4" src={props.icon} alt="" />
                      <div className="d-flex heisa align-items-center"></div>
                    </div>
                  </div>
                  <div className="b-t-i color-black body-tren-text text-start d-flex align-items-center text-of-card-to-buy just ">
                    {props.firstLine}
                    <br className="brd" />
                    {props.secondLine} <br className="brd" />
                    {props.fourthLine}
                    <br className="brd" /> <br className="brd" />
                    {props.thirdLine}
                  </div>
                  <div className="b-t-i color-black body-tren-price  d-flex align-items-center just dkhnjjhf">
                    <h1 className="priseRub"> {props.prise}</h1>
                    <a
                      className="buy d-flex align-items-center justify-content-center  bg-new-red"
                      href="how-to-buy-valorant"
                    >
                      {t("all.buy")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-grid-item">
        <img className="coh-img" src={props.imgSrc} alt="" />
        <div
          type="button"
          className="play-better flare-button bg-new-red"
          data-bs-toggle="modal"
          data-bs-target={indexToggle}
        >
          {t("all.play-better")}
        </div>
        <div
          className="modal fade "
          id={props.indexToggle}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn-close-DIV d-flex justify-content-center align-items-center"
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <button type="button" className="btn-icon">
                <img src="./img/valicon.png" alt="" />
              </button>

              <div className="grid-card-tren">
                <div className="modal-width ">
                  <img src={props.imgSrc} alt="" className="modal-width-tn " />
                </div>
                <div className="body-tren">
                  <div className="b-t-i color-black body-tren-header d-flex align-items-end just idng">
                    <div className="info d-flex justify-content-between align-items-center">
                      <h1 className="tren-name">{props.name}</h1>
                      <img className="ms-4" src={props.icon} alt="" />
                      <div className="d-flex heisa align-items-center"></div>
                    </div>
                  </div>
                  <div className="b-t-i color-black body-tren-text text-start d-flex align-items-center text-of-card-to-buy just ">
                    {props.firstLine}
                    <br className="brd" />
                    {props.secondLine}
                    <br className="brd" /> <br className="brd" />
                    {props.thirdLine}
                  </div>
                  <div className="b-t-i color-black body-tren-price  d-flex align-items-center just dkhnjjhf">
                    <h1 className="priseRub"> {props.prise}</h1>
                    <a
                      className="buy d-flex align-items-center justify-content-center bg-new-red"
                      href="how-to-buy-valorant"
                    >
                      {t("all.buy")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
