import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MyFarm from './pages/MyFarm';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Alerts from './pages/Alerts';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/my-farm" component={MyFarm} />
        <Route path="/community" component={Community} />
        <Route path="/resources" component={Resources} />
        <Route path="/alerts" component={Alerts} />
      </Switch>
    </Router>
  );
}

export default App;
