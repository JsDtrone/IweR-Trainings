import React from "react";
import AnswerQ from "./AnswerQ";
import AnwerQU from "./AnwerQU";
import { Container, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
export default function PopularQ() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  const [showButton1, setShowButton1] = useState(true);
  const [showMessage1, setShowMessage1] = useState(false);
  const [showButton2, setShowButton2] = useState(true);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showButton3, setShowButton3] = useState(true);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showButton4, setShowButton4] = useState(true);
  const [showMessage4, setShowMessage4] = useState(false);
  const [showButton5, setShowButton5] = useState(true);
  const [showMessage5, setShowMessage5] = useState(false);
  const FirstChild = styled.div`
    background-color: rgba(238, 238, 238, 0) !important;
  `;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const titles = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const answ = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };
  return (
    <motion.div initial="hidden" whileInView="visible" class="z-top dsfdssf">
      <motion.h1
        custom={2}
        variants={titles}
        class="bold-Title-ds text-center  d-flex justify-content-center align-items-center"
      >
        {t("all.answers-title")}
      </motion.h1>

      <div class="mt-3">
        <div className="container">
          <motion.div custom={1} variants={answ}>
            {showButton && (
              <button
                className="btn-to-ani"
                onClick={() => setShowMessage(true)}
              >
                <AnswerQ value={t("all.question.first")} num="1" />
              </button>
            )}

            <CSSTransition
              in={showMessage}
              timeout={410}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton(true)}
              onExited={() => setShowButton(true)}
            >
              <div class="row alert-enter-done ">
                <div class="d-flex justify-content-center alight-item-center">
                  <FirstChild
                    aria-label="Close alert"
                    onClick={() => setShowMessage(false)}
                    className="answ width-as-grid d-flex alight-item-center"
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage(false)}
                  >
                    <AnwerQU
                      onClick={() => setShowMessage(false)}
                      valueAns1={t("all.answers.first.first-line")}
                      valueAns2={t("all.answers.first.second-line")}
                      hrefff={
                        <a href="https://vk.com/iwerfortnite">
                          <b className="no-eff">vk.com/iwerfortnite</b>
                        </a>
                      }
                    />
                  </FirstChild>
                </div>
              </div>
            </CSSTransition>
          </motion.div>
          <motion.div variants={answ} custom={2}>
            {showButton && (
              <button
                className="btn-to-ani"
                onClick={() => setShowMessage1(true)}
              >
                <AnswerQ value={t("all.question.second")} num="2" />
              </button>
            )}

            <CSSTransition
              in={showMessage1}
              timeout={410}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton1(true)}
              onExited={() => setShowButton1(true)}
            >
              <div class="row ">
                <div class="d-flex justify-content-center alight-item-center">
                  <FirstChild
                    aria-label="Close alert"
                    onClick={() => setShowMessage1(false)}
                    className="answ width-as-grid d-flex alight-item-center"
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage1(false)}
                  >
                    <AnwerQU
                      onClick={() => setShowMessage1(false)}
                      valueAns1={t("all.answers.second.first-line")}
                      valueAns2={t("all.answers.second.second-line")}
                    />
                  </FirstChild>
                </div>
              </div>
            </CSSTransition>
          </motion.div>
          <motion.div variants={answ} custom={3}>
            {showButton && (
              <button
                className="btn-to-ani"
                onClick={() => setShowMessage2(true)}
              >
                <AnswerQ value={t("all.question.third")} num="3" />
              </button>
            )}

            <CSSTransition
              in={showMessage2}
              timeout={410}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton2(true)}
              onExited={() => setShowButton2(true)}
            >
              <div class="row ">
                <div class="d-flex justify-content-center alight-item-center">
                  <FirstChild
                    aria-label="Close alert"
                    onClick={() => setShowMessage2(false)}
                    className="answ width-as-grid d-flex alight-item-center"
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage2(false)}
                  >
                    <AnwerQU
                      onClick={() => setShowMessage2(false)}
                      valueAns1={t("all.answers.third.first-line")}
                      valueAns2={t("all.answers.third.second-line")}
                    />
                  </FirstChild>
                </div>
              </div>
            </CSSTransition>
          </motion.div>
          <motion.div variants={answ} custom={4}>
            {showButton && (
              <button
                className="btn-to-ani"
                onClick={() => setShowMessage3(true)}
              >
                <AnswerQ value={t("all.question.forth")} num="4" />
              </button>
            )}

            <CSSTransition
              in={showMessage3}
              timeout={410}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton3(true)}
              onExited={() => setShowButton3(true)}
            >
              <div class="row ">
                <div class="d-flex justify-content-center alight-item-center">
                  <FirstChild
                    aria-label="Close alert"
                    onClick={() => setShowMessage3(false)}
                    className="answ width-as-grid d-flex alight-item-center"
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage3(false)}
                  >
                    <AnwerQU
                      onClick={() => setShowMessage3(false)}
                      valueAns1={t("all.answers.forth.first-line")}
                      valueAns2={t("all.answers.forth.second-line")}
                    />
                  </FirstChild>
                </div>
              </div>
            </CSSTransition>
          </motion.div>
          <motion.div variants={answ} custom={5}>
            {showButton && (
              <button
                className="btn-to-ani"
                onClick={() => setShowMessage4(true)}
              >
                <AnswerQ value={t("all.question.fifth")} num="5" />
              </button>
            )}

            <CSSTransition
              in={showMessage4}
              timeout={410}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton4(true)}
              onExited={() => setShowButton4(true)}
            >
              <div class="row ">
                <div class="d-flex justify-content-center alight-item-center">
                  <FirstChild
                    aria-label="Close alert"
                    onClick={() => setShowMessage4(false)}
                    className="answ width-as-grid d-flex alight-item-center"
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage4(false)}
                  >
                    <AnwerQU
                      onClick={() => setShowMessage4(false)}
                      valueAns1={t("all.answers.first.first-line")}
                      valueAns2={t("all.answers.first.second-line")}
                      hrefff={
                        <a href="https://vk.com/iwerfortnite">
                          <b className="no-eff">vk.com/iwerfortnite</b>
                        </a>
                      }
                    />
                  </FirstChild>
                </div>
              </div>
            </CSSTransition>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
