import React from 'react';
import FirstPage from './firstPage';
import PricingPage from './pricingPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          {/* <FirstPage /> */}
          <Route path="/" exact component={FirstPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="spectra.starllysolutions.com/pricing" component={PricingPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
