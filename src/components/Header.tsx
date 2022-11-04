import React from 'react';
import { Menu } from '../types/user';
import Search from './Search';
import './Header.css';
import { Link } from 'react-router-dom';

export interface Props {
  userInfo: string;
  menu: Array<Menu>;
}

interface State {
  activeKey: number;
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { activeKey: 0 };
  }

  changeActiveKey(key: number) {
    this.setState({ activeKey: key });
  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="menu">
          <ul>
            {this.props.menu.map((item) => (
              <li
                key={item.key}
                className={this.state.activeKey === item.key ? 'active' : ''}
                onClick={() => this.changeActiveKey(item.key)}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Search></Search>
        <div className="actions-group">
          <button className="add-btn">创作者中心</button>
          <button className="more"></button>
        </div>
        <div className="vip">vip</div>
        <div className="notification"></div>
        <div className="profile">{this.props.userInfo}</div>
      </div>
    );
  }
}

export default Header;
