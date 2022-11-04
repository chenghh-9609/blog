export interface routeInterface {
  path: string;
  component: any;
  children?: Array<routeInterface>;
}

export type RouteInterface = routeInterface;
