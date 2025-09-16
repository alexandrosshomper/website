import React, { lazy, Suspense, useEffect, useState } from "react";
import Spinner from "react-spinner-material";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";

import { Colors, Devices } from "./components/DesignSystem";
import routes from "./routes";

// FUNCTIONS
import ScrollToTop from "./functions/ScrollToTop";
import NavigationSticky from "./components/Navigation/NavigationSticky.js";

const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./components/Pages/Home/Home"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));
const Portfolio = lazy(() => import("./components/Pages/Portfolio/Portfolio"));
const Writing = lazy(() => import("./components/Pages/Writing/Writing"));

// REPORTS
const Reports = lazy(() => import("./components/Pages/Reports/Reports.js"));
const OASaasGrowth = lazy(() =>
  import("./components/Pages/Reports/OASaasGrowth.js")
);
const FourIndustryShifts = lazy(() =>
  import("./components/Pages/Reports/FourIndustryShifts.js")
);

// CASE STUDIES
const CaseStudies = lazy(() =>
  import("./components/Pages/CaseStudies/CaseStudies")
);
const AsanaCaseStudy = lazy(() =>
  import("./components/Pages/CaseStudies/AsanaCaseStudy")
);

// FLOW GALLERY
const Flows = lazy(() => import("./components/Pages/Flows/Flows"));
const AsanaFlow = lazy(() => import("./components/Pages/Flows/AsanaFlow"));
const LinearFlow = lazy(() => import("./components/Pages/Flows/LinearFlow"));

// PORTFOLIO
const Occhio = lazy(() => import("./components/Pages/Portfolio/Occhio"));
const KnaufExplorations = lazy(() =>
  import("./components/Pages/Portfolio/KnaufExplorations")
);
const KnaufAccount = lazy(() =>
  import("./components/Pages/Portfolio/KnaufAccount")
);
const KnaufOrderOverview = lazy(() =>
  import("./components/Pages/Portfolio/KnaufOrderOverview")
);
const MyKnauf = lazy(() => import("./components/Pages/Portfolio/MyKnauf"));

const Heraklit = lazy(() => import("./components/Pages/Heraklit/Heraklit"));

const Navigation = lazy(() => import("./components/Navigation/Navigation"));

const componentMap = {
  Home,
  Contact,
  Portfolio,
  Writing,
  Reports,
  OASaasGrowth,
  FourIndustryShifts,
  CaseStudies,
  AsanaCaseStudy,
  Flows,
  AsanaFlow,
  LinearFlow,
  Occhio,
  KnaufExplorations,
  KnaufAccount,
  KnaufOrderOverview,
  MyKnauf,
  Heraklit,
};

const appRoutes = routes.filter(
  ({ component }) => component && componentMap[component]
);

const AppContainer = styled.div`
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

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}${location.search}`,
    });
  }, [location]);

  return null;
};

// Initialize Google Analytics
ReactGA.initialize("G-6BNG13DFW0");

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const updateStickyState = () => {
      setIsSticky(window.pageYOffset > 152);
    };

    updateStickyState();
    window.addEventListener("scroll", updateStickyState);

    return () => {
      window.removeEventListener("scroll", updateStickyState);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <GoogleAnalyticsTracker />

      <AppContainer className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Alexandros Shomper</title>
          <description>
            Experienced in core and growth initiatives from acquisition to
            retention & engagement. Bridging business, design, and tech to
            create awesome solutions people love.
          </description>
        </Helmet>
        <Suspense fallback={renderLoader()}>
          <Navigation />
          {isSticky && <NavigationSticky />}

          <Switch>
            {appRoutes.map(({ path, exact, component }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                component={componentMap[component]}
              />
            ))}
          </Switch>
          <Footer />
        </Suspense>
      </AppContainer>
    </Router>
  );
}

export default App;
