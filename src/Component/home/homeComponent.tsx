import { useEffect, useState } from "react";
import { IArticles } from "../../DataModel/articles/articles";
import { Card } from "../card";
import "./home.styles.css";
const initialPageSize = 6;
interface InputProps {
  articles: Array<IArticles>;
}
const Home = (props: InputProps) => {
  const { articles } = props;
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [cardArticles, setCardArticles] = useState(new Array<IArticles>());

  useEffect(() => {
    setCardArticles(articles.slice(0, initialPageSize));
  }, [articles]);

  const onClickLoadMore = () => {
    if (pageSize < articles.length) {
      setPageSize(pageSize + initialPageSize);
      setCardArticles(articles.slice(0, pageSize + initialPageSize));
    }
  };

  return (
    <section className="home">
      <h2 className="margin">Welcome to LEVO article</h2>
      <p className="margin">
        Virgin Orbit’s LauncherOne and its 747 carrier aircraft “Cosmic Girl”
        have launched the US Defense Department’s STP-27VPB mission along with
        three commercial satellites. The launch occurred on Thursday, January 13
        at approximately 2:51 PM PST (22:51 UTC). Cosmic Girl took off from the
        Mojave Air and Space Port before flying out to the launch zone near the
        Channel Islands off the southern California coast.
      </p>
      <section className="cardContainer">
        {articles &&
          cardArticles &&
          cardArticles.map((article: IArticles, index) => {
            return <Card key={index} article={article} />;
          })}
      </section>
      <button
        className="loadMore margin"
        disabled={pageSize >= articles.length}
        onClick={onClickLoadMore}
      >
        Load More
      </button>
    </section>
  );
};
Home.defaultProps = { articles: [] };
export default Home;
