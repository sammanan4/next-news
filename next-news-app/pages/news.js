import NewsItem from "../components/UI/NewsItem";
import { newsActions } from "../store/news-store";
import { useDispatch } from "react-redux";
import Button from "../components/UI/Button";

const news = ({ articles }) => {
  const dispatch = useDispatch();
  dispatch(newsActions.setArticles(articles));

  return (
    <div>
      <Button
        title="Mark all as read"
        onClick={() => dispatch(newsActions.markAllAsRead())}
      />
      <Button
        title="Mark all as unread"
        onClick={() => dispatch(newsActions.markAllAsUnread())}
      />
      {articles.map((article, id) => (
        <NewsItem key={id} article={article} articleId={id} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const resp = await fetch("http://localhost:3000/");
  const articles = await resp.json();
  return {
    props: {
      articles,
    },
  };
};

export default news;
