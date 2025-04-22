import React, { lazy, Suspense } from "react";
import Spinner from "react-spinner-material";
//import React from "react";
import styled from "@emotion/styled";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Colors, Devices } from "../src/components/DesignSystem";
import ScrollToTop from "./functions/ScrollToTop";
//import Footer from "./components/Footer/Footer";
const Footer = lazy(() => import("./components/Footer/Footer"));
//import Home from "./components/Pages/Home/Home";
const Home = lazy(() => import("./components/Pages/Home/Home"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));
const Portfolio = lazy(() => import("./components/Pages/Portfolio/Portfolio"));
const Writing = lazy(() => import("./components/Pages/Writing/Writing"));
const Profile = lazy(() => import("./components/Pages/Profile/Profile"));

//REPORTS
const Reports = lazy(() => import("./components/Pages/Reports/Reports.js"));
const OASaasGrowth = lazy(() =>
  import("./components/Pages/Reports/OASaasGrowth.js")
);
const FourIndustryShifts = lazy(() =>
  import("./components/Pages/Reports/FourIndustryShifts.js")
);

//CASE STUDIES
const CaseStudies = lazy(() =>
  import("./components/Pages/CaseStudies/CaseStudies")
);
const AsanaCaseStudy = lazy(() =>
  import("./components/Pages/CaseStudies/AsanaCaseStudy")
);

//FLOW GALLERY
const Flows = lazy(() => import("./components/Pages/Flows/Flows"));
const AsanaFlow = lazy(() => import("./components/Pages/Flows/AsanaFlow"));

//PORTFOLIO
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
const FeatheredHooks = lazy(() =>
  import("./components/Pages/SideProjects/FeatheredHooks")
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
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/writing" component={Writing} />

            {/*REPORTS*/}
            <Route exact path="/reports" component={Reports} />
            <Route
              exact
              path="/reports/why-onboarding-and-activation-are-the-ultimate-levers-for-saas-growth"
              component={OASaasGrowth}
            />
            <Route
              exact
              path="/reports/four-indsutry-shifts-making-onboarding-and-activation-indispensible"
              component={FourIndustryShifts}
            />
            {/*CASE STUDIES*/}
            <Route exact path="/case-studies" component={CaseStudies} />
            <Route
              exact
              path="/case-studies/asana"
              component={AsanaCaseStudy}
            />
            {/*CASE STUDIES*/}
            <Route exact path="/flows" component={Flows} />
            <Route exact path="/flows/asana" component={AsanaFlow} />
            {/*PORTFOLIO*/}
            <Route exact path="/occhio" component={Occhio} />
            <Route
              exact
              path="/knauf-explorations"
              component={KnaufExplorations}
            />
            <Route exact path="/knauf-account" component={KnaufAccount} />
            <Route
              exact
              path="/knauf-orderoverview"
              component={KnaufOrderOverview}
            />
            <Route exact path="/myknauf" component={MyKnauf} />
            <Route exact path="/feathered-hooks" component={FeatheredHooks} />
            <Route exact path="/heraklit" component={Heraklit} />
          </Switch>
          <Footer />
        </Suspense>
      </App>
    </Router>
  );
}
export default App;
