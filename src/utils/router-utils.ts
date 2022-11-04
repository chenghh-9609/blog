import { Menu } from '../types/user';

export function mapRouteToMenu(routes: any): Menu[] {
  return routes.map((item: any, key: number) => ({
    path: item.path,
    name: item.name,
    key: key,
    children: item.children
  }));
}
