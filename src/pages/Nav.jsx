import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Nav(props) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const top = {
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
  const Navs = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="bg-dark text-white bg-dtron-des"
    >
      <motion.div custom={0.6} variants={top} className="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 ">
          <ul className="nav nav-pills d-flex justify-content-center">
            <li className="nav-item text-white">
              <a href="/fortnite" className="nav-link col-blue ">
                <h4 className="m-0">
                  <b> Fortnite </b>
                </h4>
              </a>
            </li>
            <li className="nav-item  ">
              <a href="/csgo" className="nav-link  color-yellow">
                <h4 className="m-0">
                  <b> CSGO </b>
                </h4>
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="/valorant" className="nav-link new-red   text-val-nav">
                <h4 className="m-0">
                  <b> Valorant </b>
                </h4>
              </a>
            </li>
          </ul>
        </header>
      </motion.div>
    </motion.div>
  );
  return Navs;
}

export default Nav;
