import React, { lazy, Suspense } from "react";
import Spinner from "react-spinner-material";
//import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Colors, Devices } from "../src/components/DesignSystem";
import ReactGA from "react-ga4";

//FUNCTIONS
import ScrollToTop from "./functions/ScrollToTop";
import NavigationSticky from "./components/Navigation/NavigationSticky.js";

//import Footer from "./components/Footer/Footer";
const Footer = lazy(() => import("./components/Footer/Footer"));
const HomeJob = lazy(() => import("./components/Pages/Home/HomeJob"));
const Profile = lazy(() => import("./components/Pages/Profile/Profile"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));
const Portfolio = lazy(() => import("./components/Pages/Portfolio/Portfolio"));
const Writing = lazy(() => import("./components/Pages/Writing/Writing"));

//REPORTS
const Reports = lazy(() => import("./components/Pages/Reports/Reports.js"));
const OASaasGrowth = lazy(
  () => import("./components/Pages/Reports/OASaasGrowth.js"),
);
const FourIndustryShifts = lazy(
  () => import("./components/Pages/Reports/FourIndustryShifts.js"),
);

//CASE STUDIES
const CaseStudies = lazy(
  () => import("./components/Pages/CaseStudies/CaseStudies"),
);
const AsanaCaseStudy = lazy(
  () => import("./components/Pages/CaseStudies/AsanaCaseStudy"),
);

//FLOW GALLERY
const Flows = lazy(() => import("./components/Pages/Flows/Flows"));
const AsanaFlow = lazy(() => import("./components/Pages/Flows/AsanaFlow"));
const LinearFlow = lazy(() => import("./components/Pages/Flows/LinearFlow"));
const WrikeFlow = lazy(() => import("./components/Pages/Flows/WrikeFlow.js"));
const TrelloFlow = lazy(() => import("./components/Pages/Flows/TrelloFlow.js"));

//PORTFOLIO
const Occhio = lazy(() => import("./components/Pages/Portfolio/Occhio"));
const KnaufExplorations = lazy(
  () => import("./components/Pages/Portfolio/KnaufExplorations"),
);
const KnaufAccount = lazy(
  () => import("./components/Pages/Portfolio/KnaufAccount"),
);
const KnaufOrderOverview = lazy(
  () => import("./components/Pages/Portfolio/KnaufOrderOverview"),
);
const KnaufMaterialCalculatorPMF = lazy(
  () => import("./components/Pages/Portfolio/KnaufMaterialCalculatorPMF"),
);
const MyKnauf = lazy(() => import("./components/Pages/Portfolio/MyKnauf"));

const Heraklit = lazy(() => import("./components/Pages/Heraklit/Heraklit"));

const NotFound = () => (
  <div style={{ textAlign: "center", padding: "120px 24px" }}>
    <h1>404 — Page not found</h1>
  </div>
);

/*const MiniNavigation = lazy(() =>
  import("./components/Navigation/MiniNavigation/MiniNavigation")
);*/
const StyledApp = styled.div`
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

// Initialize Google Analytics
ReactGA.initialize("G-6BNG13DFW0"); // Replace with your Google Analytics tracking ID

function App() {
  return (
    <Router>
      <ScrollToTop />

      <StyledApp className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Alexandros Shomper — Product Lead &amp; Designer</title>
          <meta
            name="description"
            content="Product Lead &amp; Designer with 15+ years experience in B2B and B2C. Specialising in product-led growth, user onboarding, and design systems."
          />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.alexandrosshomper.de/#person",
                "name": "Alexandros Shomper",
                "url": "https://www.alexandrosshomper.de",
                "jobTitle": "Product Lead",
                "description": "Product Lead and Designer with 15+ years experience in B2B and B2C, specialising in product-led growth, onboarding, activation, and design systems.",
                "sameAs": [
                  "https://www.linkedin.com/in/alexshomper/",
                  "https://github.com/alexandrosshomper"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.alexandrosshomper.de/#website",
                "url": "https://www.alexandrosshomper.de",
                "name": "Alexandros Shomper",
                "author": { "@id": "https://www.alexandrosshomper.de/#person" }
              }
            ]
          })}</script>
        </Helmet>
        <Suspense fallback={renderLoader()}>
          <NavigationSticky />

          <Switch>
            <Route exact path="/job" component={HomeJob} />
            <Route exact path="/about" component={Profile} />
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
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
              path="/reports/four-industry-shifts-making-onboarding-and-activation-indispensable"
              component={FourIndustryShifts}
            />
            {/*CASE STUDIES*/}
            <Route exact path="/case-studies" component={CaseStudies} />
            <Route
              exact
              path="/case-studies/asana"
              component={AsanaCaseStudy}
            />
            {/*FLOWS*/}
            <Route exact path="/flows" component={Flows} />
            <Route exact path="/flows/asana" component={AsanaFlow} />
            <Route exact path="/flows/linear" component={LinearFlow} />
            <Route exact path="/flows/wrike" component={WrikeFlow} />
            <Route exact path="/flows/trello" component={TrelloFlow} />
            {/*PORTFOLIO*/}
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/occhio" component={Occhio} />
            <Route
              exact
              path="/portfolio/knauf-explorations"
              component={KnaufExplorations}
            />
            <Route
              exact
              path="/portfolio/knauf-account"
              component={KnaufAccount}
            />
            <Route
              exact
              path="/portfolio/knauf-order-overview"
              component={KnaufOrderOverview}
            />
            <Route
              exact
              path="/portfolio/knauf-material-calculator"
              component={KnaufMaterialCalculatorPMF}
            />
            <Route exact path="/portfolio/myknauf" component={MyKnauf} />
            <Route exact path="/heraklit" component={Heraklit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </StyledApp>
    </Router>
  );
}
export default App;
