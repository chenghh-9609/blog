import React from 'react';
import { Link } from 'react-router-dom';
import { Article, User } from '../types/user';
import './entrylist.css';
interface Props {
  user: User;
  article: Article;
}

interface State {}

export default class EntryList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  routeToArticle() {
    const to = '/post/' + this.props.article.id;
  }

  render() {
    const tags = this.props.article.tags.map((item, i) => (
      <li key={i} className="taglist-item">
        <Link to={'/tag/' + item}>{item}</Link>
      </li>
    ));
    const tagList = <ul className="taglist">{tags}</ul>;
    return (
      <div className="entrylist" onClick={this.routeToArticle}>
        <div className="entrylist-profile">
          <Link to={'/user/' + this.props.user.id}>{this.props.user.name}</Link>
          <span>{this.props.article.date.toLocaleDateString()}</span>
          {tagList}
        </div>
        <div className="entrylist-content">
          <h2>{this.props.article.title}</h2>
          <div className="entrylist-desc">{this.props.article.desc}</div>
          <div className="entrylist-extra">
            <span><i className='iconfont icon-chakan'></i>{this.props.article.watchNum}</span>
            <span><i className='iconfont icon-zan'></i>{this.props.article.starNum}</span>
            <span><i className='iconfont icon-pinglun'></i>{this.props.article.commentNum}</span>
          </div>
        </div>
      </div>
    );
  }
}
