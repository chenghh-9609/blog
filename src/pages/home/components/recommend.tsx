import React from 'react';
import ButtonGroup from '../../../components/button-group';
import EntryList from '../../../components/entrylist';
import { Article, User } from '../../../types/user';
import './recommend.css';

interface Props {}
interface State {
  users: User[];
  articles: Article[];
  authors: User[];
}

export default class Recommend extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const user: User = {
      name: 'lunary',
      id: 1,
      followers: [],
      followings: [],
      totalStars: 10,
      totalWatch: 200,
      weights: 1,
    };
    const article: Article = {
      id: 1,
      user: user,
      title: 'forEach处理异步任务遇到的坑',
      desc: '大家好，我是zz,时间发生在上周，一位组员遇到一个问题，几个同事都没能帮忙解决，我在这边就开门见山直接描述当时他遇到的问题。\
  他在forEach处理了异步，但是始终不能顺序执行，至此想要的数据怎么都拿不到，组员绞尽脑汁，不知道问题发生在哪里。\
  此篇文章我们就来探究下forEach循环下处理异步会发生什么样的情况。',
      paragraphs: [
        '大家好，我是zz,时间发生在上周，一位组员遇到一个问题，几个同事都没能帮忙解决，我在这边就开门见山直接描述当时他遇到的问题。\
    他在forEach处理了异步，但是始终不能顺序执行，至此想要的数据怎么都拿不到，组员绞尽脑汁，不知道问题发生在哪里。\
    此篇文章我们就来探究下forEach循环下处理异步会发生什么样的情况。',
        '大家好，我是zz,时间发生在上周，一位组员遇到一个问题，几个同事都没能帮忙解决，我在这边就开门见山直接描述当时他遇到的问题。\
    他在forEach处理了异步，但是始终不能顺序执行，至此想要的数据怎么都拿不到，组员绞尽脑汁，不知道问题发生在哪里。\
    此篇文章我们就来探究下forEach循环下处理异步会发生什么样的情况。',
        '大家好，我是zz,时间发生在上周，一位组员遇到一个问题，几个同事都没能帮忙解决，我在这边就开门见山直接描述当时他遇到的问题。\
    他在forEach处理了异步，但是始终不能顺序执行，至此想要的数据怎么都拿不到，组员绞尽脑汁，不知道问题发生在哪里。\
    此篇文章我们就来探究下forEach循环下处理异步会发生什么样的情况。',
      ],
      date: new Date(),
      tags: ['前端', 'JavaScript', 'Vue.js'],
      watchNum: 7245,
      commentNum: 30,
      starNum: 51,
    };
    const users: User[] = [];
    const articles: Article[] = [];
    for (let i = 0; i < 10; i++) {
      users.push(user);
      articles.push(article);
    }
    const author = {
      name: 'lunary',
      id: 1,
      followers: [],
      followings: [],
      totalStars: 10,
      totalWatch: 200,
      weights: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat error aliquid ipsam unde vel fugit ab nihil mollitia quasi quis culpa vero eius nisi, eligendi odio esse deleniti itaque eveniet.',
    };
    const authors = [author, author, author];
    this.state = {
      users,
      articles,
      authors,
    };
  }
  render() {
    const buttons = ['推荐', '最新', '热榜'];
    const date = new Date();
    const hour = date.getHours();
    const dateStr =
      hour >= 12
        ? '下午'
        : hour >= 19 && hour < 6
        ? '晚上'
        : hour <= 9 && hour >= 6
        ? '早上'
        : '上午';
    const entrylist = this.state.users.map((item, i) => (
      <EntryList
        user={item}
        article={this.state.articles[i]}
        key={i}
      ></EntryList>
    ));

    const authorsList = this.state.authors.map((author: User, i: number) => (
      <div className="author-list-item" key={i}>
        <div className="author-list-item-img">
          <img src={author.avatar} alt={author.name} />
        </div>
        <div className="author-list-item-desc">
          <h4>{author.name}</h4>
          <p>{author.desc}</p>
        </div>
      </div>
    ));
    return (
      <div className="center">
        <div className="left">
          <ButtonGroup buttons={buttons}></ButtonGroup>
          <div className="entries">{entrylist}</div>
        </div>
        <div className="right">
          <div className="qiandao">
            <div className="qiandao-title">
              <span>
                <i className="iconfont icon-rili-xianxing-xi"></i>
                {dateStr}好！
              </span>
              <button className="qiandao-btn">去签到</button>
            </div>
            <p className="qiandao-text">点亮你在社区的每一天</p>
          </div>
          <div className="authors">
            <div className="authors-title"><i className='iconfont icon-bangdan'></i>作者榜</div>
            <div className="authors-list">{authorsList}</div>
            <div className="authors-total">
              完整榜单 <i className="iconfont icon-qiehuanqiyou"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
