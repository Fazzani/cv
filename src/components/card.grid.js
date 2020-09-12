import React, { useEffect, useState } from 'react';
import { Card } from './card';
import { CardGridHeader } from './card-grid-header';
import { Description } from './description';
import cv from '../data/cv.json';

export default function CardGrid() {
  const [section, setActiveSection] = useState({});

  const SectionChanged = (sec) => {
    if (section !== sec) {
      setActiveSection(sec);
    }
  };

  const list = cv && Array.isArray(cv.Sections) ? cv.Sections.map((c, index) => <Card article={c} onSectionChange={() => SectionChanged(c)} key={c.$id}></Card>) : <h3>Nothing</h3>;

  return (
    cv && (
      <div className="popular-articles">
        <CardGridHeader candidate={cv.Candidate}></CardGridHeader>
        <div className="mini-card-grid">{list}</div>
        <Description section={section}></Description>
      </div>
    )
  );
}
