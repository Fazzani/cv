import React, { useEffect, useState } from 'react';
import { Card } from './card';
import { CardGridHeader } from './card-grid-header';

export default function CardGrid() {
  const [cv, setCv] = useState({});
  useEffect(() => {
    const fetchCv = async () => {
      try {
        const response = await fetch('./cv.json');
        setCv(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchCv();
    return () => {
      setCv({});
    };
  }, []);

  const list = cv && Array.isArray(cv.Sections) ? cv.Sections.map((c, index) => <Card article={c} key={index}></Card>) : <h3>Nothing</h3>;

  return (
    cv && (
      <div className="popular-articles">
        <CardGridHeader candidate={cv.Candidate}></CardGridHeader>
        <div className="mini-card-grid">{list}</div>
      </div>
    )
  );
}
