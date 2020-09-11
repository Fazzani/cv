import React from 'react';
import './card.styles.css';

const Arrow = () => {
  return (
    <svg viewBox="0 0 24 24" className="icon-arrow-right" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12.5L23 12.5" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M1 12.5H2" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M17.5 7L23 12.5L17.5 18" stroke="url(#paint2_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <defs>
        <linearGradient id="paint0_linear" x1="10.7498" y1="12.5" x2="11.3447" y2="9.73465" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A00"></stop>
          <stop offset="1" stopColor="#DA1B60"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="1.23436" y1="12.5" x2="2.00945" y2="12.2748" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A00"></stop>
          <stop offset="1" stopColor="#DA1B60"></stop>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="18.789" y1="17.9995" x2="23.3162" y2="17.3419" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8A00"></stop>
          <stop offset="1" stopColor="#DA1B60"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((t, index) => (
        <a href="blank" rel="tag" key={index}>
          {t}
        </a>
      ))}
    </div>
  );
};

export default function Company({ company }) {
  return (
    <div className="author-avatar">
      <a className="author-name" href={company.Site}>
        <img alt="" src={company.Logo} className="photo" height="80" width="80" />
      </a>
      <svg className="half-circle" width="80px" height="80px">
        <use href="#half-circle">
          <svg id="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
        </use>
      </svg>
      <svg width="0" height="0" className="visually-hidden">
        <defs>
          <linearGradient id="orange-to-pink" x1="1" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#DA1B60"></stop>
            <stop offset="100%" stopColor="#ff8a00"></stop>
          </linearGradient>
          <filter id="duotone_orange_pink">
            <feColorMatrix
              type="matrix"
              result="grayscale"
              values="1 0 0 0 0
                  1 0 0 0 0
                  1 0 0 0 0
                  0 0 0 1 0"></feColorMatrix>
            <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
              <feFuncR type="table" tableValues="0.7411764706 0.9882352941"></feFuncR>
              <feFuncG type="table" tableValues="0.0431372549 0.7333333333"></feFuncG>
              <feFuncB type="table" tableValues="0.568627451 0.05098039216"></feFuncB>
              <feFuncA type="table" tableValues="0 1"></feFuncA>
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export const Card = ({ article }) => {
  return (
    <article className="mini-card article" id={article.$id}>
      <header className="mini-article-card-header">
        <div className="mini-article-card-title">
          <div className="mini-article-subhead">
            <time dateTime={article.StartDate} className="datetime-left">
              {article.StartDate}
            </time>
            <Arrow></Arrow>
            <time className="datetime-right" dateTime={article.EndDate}>
              {article.EndDate}
            </time>
          </div>
          <h2>
            <a href="https://css-tricks.com/heres-how-i-solved-a-weird-bug-using-tried-and-true-debugging-strategies/" className="article-card-header read-article">
              {article.Title}
            </a>
          </h2>
        </div>
      </header>
      <div className="mini-article-meta">
        <div className="mini-article-byline">
          {<Company company={article.Company}></Company>}
          <div className="author-name-area">
            <a className="author-name" href={article.Company.Site}>
              {article.Company.Name}
            </a>
          </div>
        </div>
        <Tags tags={article.Tags}></Tags>
      </div>
    </article>
  );
};
