import "./App.css";
import Nav from "./Nav";
import Amazon from "./Amazon";
import React from "react";
import Footer from "./Footer";
import Flipkart from "./Flipkart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AmazonProvider } from "./AmazonContext";
import { FlipkartProvider } from "./FlipkartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <FlipkartProvider>
          <AmazonProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Amazon} />
              <Route path="/2" component={Flipkart} />
            </Switch>
            <Footer />
          </AmazonProvider>
        </FlipkartProvider>
      </Router>
    </div>
  );
}

export default App;
