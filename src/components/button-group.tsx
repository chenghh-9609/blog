import { Component } from 'react';
import { Menu } from '../types/user';
import { Link } from 'react-router-dom';
import "./button-group.css";

interface Props {
  buttons: Array<Menu | string>;
}
interface State {}
export default class ButtonGroup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const btns = this.props.buttons.map((item, key) =>
      typeof item === 'string' ? (
        <button key={key}>{item}</button>
      ) : (
        <Link key={key} to={item.path}>
          {item.name}
        </Link>
      )
    );
    return <div className="btn-group">{btns}</div>;
  }
}
