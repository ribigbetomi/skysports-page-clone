import news from "../news";
import headlineNews from "../headlineNews";
import NewsItems from "./newsItems";
import NewsItemsGrid from "./newsItemsGrid";

const NewsPost = () => {
  return (
    <div className="news">
      <div className="news-post">
        {headlineNews.map((news, index) => {
          return <NewsItems items={news} key={index} />;
        })}
      </div>
      <div className=" grid--2x3 grid--space news-post">
        {news.map((news, index) => {
          return (
            <div className="">
              <NewsItemsGrid items={news} key={index} />
            </div>
          );
        })}
      </div>
      {/* <div className="news-post">
        {news.map((news, index) => {
          return <NewsItemsGrid items={news} key={index} />;
        })}
      </div> */}
    </div>
  );
};

export default NewsPost;
