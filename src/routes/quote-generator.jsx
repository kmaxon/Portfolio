import React from 'react';
import quotesjson from "../components/quote-generator-components/quotes.json";
import { FaTwitter } from 'react-icons/fa';
import '../components/quotes-generator.css';


export default function QuoteGenerator() {
  const quotes = quotesjson;
  const colors = [
    '#00FFFF',
    '#BB00FF',
    '#FFFF33',
    '#80002A',
    '#40FF19',
    '#FF8000'
  ];

  function GetRandomQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let quoteAndAuthor = [randomQuote.title, randomQuote.author];
    return ({
      currentQuote: quoteAndAuthor[0], 
      currentAuthor: quoteAndAuthor[1]
    });
  };

  const [quoteObj, setQuoteObj] = React.useState(GetRandomQuote());

  function GetColor() {
    return (colors[Math.floor(Math.random() * colors.length)]);
  };

  const [color, setColor] = React.useState(GetColor());

  function ClickHandler() {
    setColor(GetColor);
    setQuoteObj(GetRandomQuote());
  };

  const tweetText = `"${quoteObj.currentQuote}" - ${quoteObj.currentAuthor}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  
  const quotationMarks = "\"";

  const backgroundStyle = {
    backgroundColor: color
  };

  const colorStyle = {
    color: color
  };

  return (
    <div id="quote-generator" style={backgroundStyle}>
      <div id="quote-box" style={colorStyle}>
        <h1 id="quote-text">
          {quotationMarks + quoteObj.currentQuote + quotationMarks}
        </h1>
        <h2 id="author-text">
          {"- " + quoteObj.currentAuthor}
        </h2>
        <div id="buttons">
          <a id="tweet-quote" style={backgroundStyle} href={tweetUrl} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <button id="new-quote" style={backgroundStyle} onClick={ClickHandler}>New Quote</button>
        </div>
      </div>
    </div>
  );
};