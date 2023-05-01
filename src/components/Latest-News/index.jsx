import { useState, useEffect } from "react";
import miracleApi from "miracle-api";
import './lastestnews.scss';
const API_PATH =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=75983714c31a4c0f9966eecb23881900";
const API_PATH1 =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=75983714c31a4c0f9966eecb23881900";
const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [sources, setSources] = useState([]);

    useEffect(() => {
      miracleApi
        .get(API_PATH)
        .then((res) => setNews(res.articles))
        .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
      miracleApi
        .get(API_PATH1)
        .then((res) => setSources(res.articles))
        .catch((err) => console.log(err));
    }, []);

    return (
      <>
        <section className="latest-news">
          <h1 className="visually-hidden">News</h1>
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="lastest-news__start">
                <div className="lastest-news__container">
                  <div className="d-flex justify-content-around">
                    <h2 className="lastest-news__title">Latest News</h2>
                    <hr className="line" />
                  </div>
                  <div className="row">
                    {news.slice(0, 10).map((item) => (
                      <div className="col-6 mb-4">
                        <div className="card  h-100">
                          <div className="card-body d-flex flex-column justify-content-between">
                            <img
                              className="latest-news__box--img card-img-top"
                              src={item.urlToImage}
                              alt={item.title}
                            />
                            <h3 className="lastest-news__box--title">
                              {item.title}
                            </h3>
                            <p className="latest-news__box--text">
                              {item.content}
                            </p>
                            <div className="d-flex align-items-center justify-content-between">
                              <a
                                className="latest-news__box--link"
                                href={item.url}
                              >
                                More
                              </a>
                              <time>
                                {item.publishedAt.slice(0, 10)}
                                <span className="latest-news__box--time">
                                  {item.publishedAt.slice(11, -4)}
                                </span>
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="site-aside p-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h2 className="site-aside__title">Trending Headlines</h2>
                  <a className="site-aside__link" href="#link">
                    View All
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-between">
                  {sources?.map((news) => (
                    <div className="site-aside__box">
                      <div className="d-flex align-items-center justify-content-between">
                        <img
                          className="site-aside__box--img"
                          src={news.urlToImage}
                          alt={news.title}
                        />
                        <div className="site-aside__box--end">
                          <h3 className="aside__box--title">{news.title}</h3>
                          <p className="aside__box--text">{news.content}</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <a
                              className="aside__box--link"
                              href={news.url}
                            >
                              More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </>
    );
}

export default LatestNews;