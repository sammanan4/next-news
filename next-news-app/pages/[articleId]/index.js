const article = ({ article }) => {
  return <div>{article.title}</div>;
};

export const getServerSideProps = async (context) => {
  const resp = await fetch(`http://localhost:3000/${context.params.articleId}`);
  const article = await resp.json();
  return {
    props: {
      article,
    },
  };
};

export default article;
