import React, { useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function GridItemFort(props) {
  let sevenLine = props.seventhLine;
  let sixLine = props.sixthLine;
  let indexToggle = "#" + props.indexToggle;
  let Toggle = styled.div`
    // // &:hover {
    // //   margin-top: 10px;
    // // }
  `;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  if (props.istrue == "fkd") {
    return (
      <div
        className="card-grid-item"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={indexToggle}
      >
        <img
          src="./img/sloy_21_141.png"
          alt=""
          className="card-grid-itemfsdf gdaghfdhgfdhj"
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
                <img src="./img/sloy_25_288 (1).png" alt="" />
              </button>

              <div className="grid-card-tren">
                <div className="modal-width ">
                  <img src={props.imgSrc} alt="" className="modal-width-tn " />
                </div>
                <div className="body-tren">
                  <div className="b-t-i color-black body-tren-header d-flex align-items-end just idng">
                    <div className="info d-flex justify-content-between align-items-center">
                      <h1 className="tren-name">{props.name}</h1>

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
                      className="buy d-flex align-items-center justify-content-center bg-yellow-dt"
                      href="how-to-buy-fortnite"
                    >
                      {t("fortnite.buy")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (sixLine != undefined && sevenLine != undefined) {
    return (
      <div className="card-grid-item">
        <img className="coh-img" src={props.imgSrc} alt="" />
        <Toggle
          type="button"
          className="play-better flare-button"
          data-bs-toggle="modal"
          data-bs-target={indexToggle}
        >
          {t("all.play-better")}
        </Toggle>
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
                <img src="./img/sloy_25_288 (1).png" alt="" />
              </button>

              <div className="grid-card-tren">
                <div className="modal-width ">
                  <img src={props.imgSrc} alt="" className="modal-width-tn " />
                </div>

                <div className="body-tren">
                  <div className="b-t-i color-black body-tren-header d-flex align-items-end just idng">
                    <div className="info d-flex justify-content-between">
                      <h1 className="tren-name">{props.name}</h1>
                      <div className="d-flex heisa align-items-center">
                        <div className="g-c-p-w cont">
                          {" "}
                          {props.partoftheworld}
                        </div>
                        <div className="g-c-p-w"> {props.pr}</div>
                        <div className="g-c-p-w"> {props.win}</div>
                      </div>
                    </div>
                  </div>
                  <div className="b-t-i text-start  color-black body-tren-text d-flex align-items-center text-of-card-to-buy just">
                    {props.firstLine}
                    <br className="br" />
                    {props.secondLine}
                    <br className="br" />
                    {props.thirdLine}
                    <br className="br" />
                    {props.fourthLine}
                    <br className="br" />
                    {props.fifthLine}
                    <br className="br" />
                    {props.sixthLine}
                    <br className="br" />
                    {props.seventhLine}
                  </div>
                  <div className="b-t-i color-black body-tren-price  d-flex align-items-center just dkhnjjhf">
                    <h1 className="priseRub"> {props.prise}</h1>
                    <a
                      className="buy d-flex align-items-center justify-content-center"
                      href="how-to-buy-fortnite
                      "
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
        <Toggle
          type="button"
          className="play-better flare-button"
          data-bs-toggle="modal"
          data-bs-target={indexToggle}
        >
          {t("all.play-better")}
        </Toggle>
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
                <img src="./img/sloy_25_288 (1).png" alt="" />
              </button>

              <div className="grid-card-tren">
                <div className="modal-width ">
                  <img src={props.imgSrc} alt="" className="modal-width-tn " />
                </div>
                <div className="body-tren">
                  <div className="b-t-i color-black body-tren-header d-flex align-items-end just idng">
                    <div className="info d-flex justify-content-between">
                      <h1 className="tren-name">{props.name}</h1>
                      <div className="d-flex heisa align-items-center">
                        <div className="g-c-p-w cont">
                          {" "}
                          {props.partoftheworld}
                        </div>
                        <div className="g-c-p-w"> {props.pr}</div>
                        <div className="g-c-p-w"> {props.win}</div>
                      </div>
                    </div>
                  </div>
                  <div className="b-t-i color-black body-tren-text text-start d-flex align-items-center text-of-card-to-buy just ">
                    {props.firstLine}
                    <br className="br" />
                    {props.secondLine} <br className="br" />
                    {props.thirdLine}
                    <br className="br" />
                    {props.fourthLine}
                    <br className="br" />
                    {props.fifthLine}
                  </div>
                  <div className="b-t-i color-black body-tren-price  d-flex align-items-center just dkhnjjhf">
                    <h1 className="priseRub"> {props.prise}</h1>
                    <a
                      className="buy d-flex align-items-center justify-content-center"
                      href="how-to-buy-fortnite
                      "
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
