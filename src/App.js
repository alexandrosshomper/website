import React, { lazy, Suspense } from "react";
import Spinner from "react-spinner-material";
//import React from "react";
import { Devices, Colors } from "../src/components/DesignSystem";
import styled from "@emotion/styled";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./functions/ScrollToTop";

//import Footer from "./components/Footer/Footer";
const Footer = lazy(() => import("./components/Footer/Footer"));
//import Home from "./components/Pages/Home/Home";
const Home = lazy(() => import("./components/Pages/Home/Home"));
//import Contact from "./components/Pages/Contact/Contact";
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));
//import Portfolio from "./components/Pages/Portfolio/Portfolio";
const Portfolio = lazy(() => import("./components/Pages/Portfolio/Portfolio"));
const Occhio = lazy(() => import("./components/Pages/Portfolio/Occhio"));
const KnaufExplorations = lazy(() =>
  import("./components/Pages/Portfolio/KnaufExplorations")
);
const Heraklit = lazy(() => import("./components/Pages/Heraklit/Heraklit"));

const NFTAnalyzer = lazy(() =>
  import("./components/Pages/NFTAnalyzer/NFTAnalyzer")
);
//import Navigation from "./components/Navigation/Navigation";
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
/*const MiniNavigation = lazy(() =>
  import("./components/Navigation/MiniNavigation/MiniNavigation")
);*/
const renderLoader = () => (
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      translateY: "50%",
      translateX: "50%",
    }}
  >
    <Spinner radius={120} color={Colors.front} stroke={2} visible={true} />
  </div>
);

function App() {
  const App = styled.div`
    text-align: center;
    margin: 0 auto;

    ${Devices.tabletS} {
      //width: 564px;
    }
    ${Devices.tabletM} {
      //width: 708px;
    }
    ${Devices.laptopS} {
      //width: 852px;
    }
    ${Devices.laptopM} {
      //width: 1140px;
    }
  `;

  return (
    <Router>
      <ScrollToTop />
      <App className="App">
        <Suspense fallback={renderLoader()}>
          <Navigation />
          {/*<MiniNavigation />*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/occhio" component={Occhio} />
            <Route
              exact
              path="/knauf-explorations"
              component={KnaufExplorations}
            />
            <Route exact path="/heraklit" component={Heraklit} />
            <Route exact path="/nftanalyzer" component={NFTAnalyzer} />
          </Switch>
          <Footer />
        </Suspense>
      </App>
    </Router>
  );
}

export default App;
