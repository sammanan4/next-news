import Link from "next/link";
import { useSelector } from "react-redux";
import newsItemStyles from "../../styles/NewsItem.module.css";

const NewsItem = ({ article, articleId }) => {
  const articles = useSelector((state) => state.news.articles);
// console.log("------------------------------------", articles);
  return (
    <Link href="/[articleId]" as={`/${articleId}`}>
      <a className={newsItemStyles.item}>
        <p>{article.title}</p>
        <i className={newsItemStyles.pubDate}>
          <b>Published on:</b> {article.pubDate}
        </i>
        {articles[articleId].read ? "read": "not read"}
      </a>
    </Link>
  );
};

export default NewsItem;
