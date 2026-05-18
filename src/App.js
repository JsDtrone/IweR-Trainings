import "./App.css";
import Chose_game from "./pages/first_page/Chose_game";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";

import PageVAl from "./pages/valorant_page/PageVAl";
import PageFortnite from "./pages/fortnite/PageFortnite";
import HowToBuy1 from "./pages/HowToBuy";
import HowToBuy0 from "./pages/HowToBuy0";
import HowToBuy from "./pages/HowToBuy1";
import Nav from "./pages/Nav";
import { useTranslation } from "react-i18next";
import PageCs from "./pages/cs/PageCs";
import { Suspense } from "react";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <Suspense fallback={""}>
      <div className="App">
        {/* <div>
        <h1>{t("title")}</h1>
      </div>
      <div>{t("description.part1")}</div>
      <div>{t("description.part2")}</div> */}

        <Router>
          {/* <Header /> */}

          <Routes>
            <Route exact path="/" element={<Chose_game />} />

            <Route
              exact
              path="/how-to-buy-csgo"
              link="https://vk.com/iwercsgo"
              element={<HowToBuy />}
            />
            <Route
              exact
              path="/how-to-buy-fortnite"
              link="https://vk.com/iwerfortnite"
              element={<HowToBuy0 />}
            />
            <Route
              exact
              path="/how-to-buy-valorant"
              link="https://vk.com/iwervalorant"
              element={<HowToBuy1 />}
            />

            <Route
              exact
              path="/csgo"
              element={
                <div>
                  <Nav activ activs />
                  <PageCs />
                </div>
              }
            />
            <Route
              exact
              path="/valorant"
              element={
                <div>
                  <Nav />
                  <PageVAl />
                </div>
              }
            />
            <Route
              exact
              path="/fortnite"
              element={
                <div>
                  <Nav />
                  <PageFortnite />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}
export default App;
