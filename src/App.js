import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Releases from "./components/pages/Releases";
import NewRelease from "./components/pages/NewRelease";
import SanityDeployments from "./components/pages/SanityDeployments";
import SignUp from "./components/pages/SignUp";
import SITDeployments from "./components/pages/SITDeployments";
import UATDeployments from "./components/pages/UATDeployments";
import Home from "./components/pages/Home";
import ActiveReleases from "./components/pages/ActiveReleases";
import DeploymentHistory from "./components/pages/DeploymentHistory";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/releases" exact component={Releases} />
        <Route path="/new-release" exact component={NewRelease} />
        <Route path="/active-releases" exact component={ActiveReleases} />
        <Route path="/sanity-deployments" exact component={SanityDeployments} />
        <Route path="/sit-deployments" exact component={SITDeployments} />
        <Route path="/uat-deployments" exact component={UATDeployments} />
        <Route path="/deployment-history" exact component={DeploymentHistory} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
