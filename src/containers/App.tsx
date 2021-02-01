import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import { Layout } from 'antd';
import { TopBar } from './TopBar';
import { LandingPage } from './LandingPage';
import { FragmentsPage } from './FragmentsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout">
        <TopBar />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/fragments">
            <FragmentsPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
