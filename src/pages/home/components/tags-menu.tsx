import { Component } from 'react';
import { Menu } from '../../../types/user';
import { Link } from 'react-router-dom';
import './tags-menu.css';
import { RouteComponentProps } from 'react-router';
interface PropsInterface {
  menu: Menu[];
}

interface State {
  activeTag: number;
  hoverTag: number | null;
}
export default class TagMenu extends Component<PropsInterface, State> {
  constructor(props: PropsInterface) {
    super(props);
    this.state = { activeTag: 0, hoverTag: null };
    this.renderPopoverBox = this.renderPopoverBox.bind(this);
    this.changeHoverItem = this.changeHoverItem.bind(this);
  }

  changeHoverItem(item: Menu) {
    this.setState({ hoverTag: item.key });
  }

  renderPopoverBox(item: Menu) {
    if (this.state.hoverTag === item.key && item.children) {
      const childTags = item.children.map((child: Menu, key: number) => (
        <Link key={key} to={child.path}>
          {child.name}
        </Link>
      ));
      return <div className="tag-popover-box">{childTags}</div>;
    }
  }

  render() {
    const tags = this.props.menu.map((item: Menu, index: number) => (
      <li
        onMouseEnter={() => this.changeHoverItem(item)}
        key={index}
        onMouseLeave={() => this.setState({ hoverTag: null })}
      >
        <Link
          className={
            'tag-item ' + (this.state.activeTag === item.key ? 'active' : '')
          }
          to={item.path}
        >
          {item.name}
        </Link>
        {this.renderPopoverBox(item)}
      </li>
    ));
    return (
      <div className="tags-wrapper">
        <div className="tags">
          <ul>{tags}</ul>
          <button className={'tag-manage-btn'}>
            <Link to="/">标签管理</Link>
          </button>
        </div>
      </div>
    );
  }
}
