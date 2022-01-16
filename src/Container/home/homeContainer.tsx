import { useEffect, useState } from "react";
import { Home } from "../../Component/home";

import { getArticles } from "../../Service/articles";
import "./home.styles.css";
const HomeContainer = () => {
  const [articles, setArticles] = useState([]);
  const [isApiError, setIsApiError] = useState(false);
  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        setIsApiError(true);
      });
  }, []);
  return (
    <main className="homeContainer">
      {!isApiError && <Home articles={articles} />}
    </main>
  );
};

export default HomeContainer;
