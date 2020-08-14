import React, { useState, useEffect } from "react";
import alanbtn from "@alan-ai/alan-sdk-web";
import NewsCards from "../NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";
import useStyles from "./styles.js";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Home = ({ country }) => {
  const alanKey =
    "d51c18260925d335f48f88da7536fd442e956eca572e1d8b807a3e2338fdd0dc/stage";

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanbtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevValue) => prevValue + 1);
        } else if (command === "open") {
          const parseNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;

          const article = articles[parseNumber - 1];
          if (parseNumber > 20) {
            alanbtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanbtn().playText("Opening...");
          }
        }
      },
    }).setVisualState({ answer: country });
  }, [country]);

  // console.log(country);
  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}

        <img
          // src="https://alan.app/voice/images/previews/preview.jpg"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png"
          alt="jarvis-logo"
          className={classes.alanLogo}
        />
      </div>
      <div className={classes.buttonDiv}>
        <a href="/">
          <Button
            className={classes.button}
            variant="contained"
            disableElevation
          >
            Change Country
          </Button>
        </a>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default Home;

//news api key b2c023068d9944db87cb4e7c1f437874
