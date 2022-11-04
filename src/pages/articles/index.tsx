import { Article, User } from '../../types/user';
import ButtonGroup from '../../components/button-group';
import EntryList from '../../components/entrylist';

interface Props {
  listData: {
    user: User;
    article: Article;
  }[];
}

export default function ArticleComponent(props: Props) {
  const buttons = ['推荐', '最新', '热榜'];
  // const entries = props.listData.map((item, index) => (
  //   <EntryList user={item.user} article={item.article} key={index}></EntryList>
  // ));
  return (
    <div className="content">
      <ButtonGroup buttons={buttons}></ButtonGroup>
      <div className="article-lists">lists</div>
    </div>
  );
}

