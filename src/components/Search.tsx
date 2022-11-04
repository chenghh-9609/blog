import React from 'react';

export interface Props {}

interface State {
  keyword: string;
}

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keyword: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ keyword: e.target && e.target.value });
  }

  handleSubmit(event: any) {
    alert('提交' + this.state.keyword);
    event.preventDefault();
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="探索稀土掘金"
        />
        <button><i className='iconfont icon-sousuo'></i></button>
      </form>
    );
  }
}
