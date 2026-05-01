import React, { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Colors, Devices } from "../src/components/DesignSystem";
import ReactGA from "react-ga4";

//FUNCTIONS
import ScrollToTop from "./functions/ScrollToTop";
import NavigationSticky from "./components/Navigation/NavigationSticky.js";

const Footer = lazy(() => import("./components/Footer/Footer"));
const HomeJob = lazy(() => import("./components/Pages/Home/HomeJob"));
const Profile = lazy(
  () =>
    import(/* webpackPrefetch: true */ "./components/Pages/Profile/Profile"),
);

const Portfolio = lazy(
  () =>
    import(
      /* webpackPrefetch: true */ "./components/Pages/Portfolio/Portfolio"
    ),
);
const Writing = lazy(
  () =>
    import(/* webpackPrefetch: true */ "./components/Pages/Writing/Writing"),
);

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

const HowIWork = lazy(() => import("./components/Pages/HowIWork/HowIWork"));

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

const LoadingSpinner = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid transparent;
  border-top-color: ${Colors.front};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const renderLoader = () => (
  <div
    style={{
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <LoadingSpinner />
  </div>
);

// Initialize Google Analytics
ReactGA.initialize("G-6BNG13DFW0"); // Replace with your Google Analytics tracking ID

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <ScrollToTop />

      <StyledApp className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Alexandros Shomper — Product Designer</title>
          <meta
            name="description"
            content="Product Designer with 15+ years experience in B2B and B2C. Specialising in product-led growth, user onboarding, and design systems."
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.alexandrosshomper.de/#person",
                  name: "Alexandros Shomper",
                  url: "https://www.alexandrosshomper.de",
                  jobTitle: "Product Designer",
                  description:
                    "Product Designer with 15+ years experience in B2B and B2C, specialising in product-led growth, onboarding, activation, and design systems.",
                  sameAs: [
                    "https://www.linkedin.com/in/alexshomper/",
                    "https://github.com/alexandrosshomper",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.alexandrosshomper.de/#website",
                  url: "https://www.alexandrosshomper.de",
                  name: "Alexandros Shomper",
                  author: { "@id": "https://www.alexandrosshomper.de/#person" },
                },
              ],
            })}
          </script>
        </Helmet>
        <NavigationSticky />
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/about" component={Profile} />
            <Route exact path="/" component={HomeJob} />
            <Route exact path="/writing" component={Writing} />
            {/*REPORTS*/}
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
            <Route exact path="/how-i-work" component={HowIWork} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </StyledApp>
    </Router>
  );
}
export default App;
