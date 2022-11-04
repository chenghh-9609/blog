import React, { useState } from 'react';
import './index.css';
import TagsMenu from './components/tags-menu';
import { Menu } from '../../types/user';
import routes from '../../router';
import './index.css';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';

export default function Home() {
  const { path, url } = useRouteMatch();
  const menu: any =
    routes[0].children?.map((route, i) => ({
      path: `${url}/${route.path}`,
      name: route.name,
      key: i,
      children: route.children,
    })) || [];
  const [state] = useState({ menu });
  const router =
    routes[0].children &&
    routes[0].children.map((route, i) => {
      return (
        <Route
          key={i}
          path={`${path}/${route.path}`}
          render={(props: any) => <route.component {...props} />}
        ></Route>
      );
    });
  return (
    <div className="wrapper">
      <TagsMenu menu={state.menu}></TagsMenu>
      <Redirect path="/home" to="/home/recommended" exact></Redirect>
      <div className="content">{router}</div>
    </div>
  );
}
