import { Route } from 'react-router-dom';
import { RouteInterface } from '../types/router';

const RouteWithSubRoutes = (route: RouteInterface, index: number) => {
  return (
    <Route
      key={index}
      path={route.path}
      render={(props) => <route.component {...props} routes={route.children} />}
    ></Route>
  );
};

export { RouteWithSubRoutes };
