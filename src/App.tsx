import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router';
import { RouteWithSubRoutes } from './router/common';
import { RouteInterface } from './types/router';
import Header from './components/Header';
import { Menu } from './types/user';
import { mapRouteToMenu } from './utils/router-utils';
import { Redirect } from 'react-router-dom';
const menu: Menu[] = mapRouteToMenu(routes);
const route = routes.map((route: RouteInterface, i: number) =>
  RouteWithSubRoutes(route, i)
);
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header userInfo="lunary" menu={menu}></Header>
        <Switch>
          <Redirect path="/" to="/home" exact></Redirect>
          {route}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
