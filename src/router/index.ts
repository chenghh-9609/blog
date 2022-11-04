import Home from '../pages/home';
import Recommended from '../pages/home/components/recommend';
import Article from "../pages/articles";
import Pins from '../pages/pins';
const routes = [
  {
    path: '/home',
    name: '首页',
    component: Home,
    children: [
      {
        name: '综合',
        path: 'recommended',
        component: Recommended,
      },
      {
        name: '关注',
        path: 'following',
        component: Article,
      },
      {
        name: '后端',
        path: 'backend',
        component: Article,
        children: [
          {
            name: '后端',
            path: '后端',
            component: Article,
          },
          {
            name: 'Java',
            path: 'Java',
            component: Article,
          },
          {
            name: 'Go',
            path: 'Go',
            component: Article,
          },
          {
            name: '数据库',
            path: '数据库',
            component: Article,
          },
          {
            name: 'MySQL',
            path: 'MySQL',
            component: Article,
          },
          {
            name: 'Spring Boot',
            path: 'Spring Boot',
            component: Article,
          },
        ],
      },
      {
        name: '前端',
        path: 'frontend',
        component: Article,
        children: [
          {
            name: '前端',
            path: '/前端',
            component: Article,
          },
          {
            name: 'JavaScript',
            path: 'JavaScript',
            component: Article,
          },
          {
            name: 'Vue.js',
            path: 'Vue.js',
            component: Article,
          },
          {
            name: 'React.js',
            path: 'React.js',
            component: Article,
          },
          {
            name: 'CSS',
            path: 'CSS',
            component: Article,
          },
          {
            name: 'Webpack',
            path: 'Webpack',
            component: Article,
          },
        ],
      },
      {
        name: 'Android',
        path: 'android',
        component: Article,
      },
      {
        name: 'iOS',
        path: 'ios',
        component: Article,
      },
      {
        name: '人工智能',
        path: 'ai',
        component: Article,
      },
    ],
  },
  {
    path: '/pins',
    name: '沸点',
    component: Pins,
  },
  {
    path: '/classes',
    name: '课程',
    component: Article,
  },
  {
    path: '/live',
    name: '直播',
    component: Article,
  },
  {
    path: '/activites',
    name: '活动',
    component: Article,
  },
];

export default routes;
