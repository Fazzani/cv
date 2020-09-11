import React from 'react';
import './card-grid-header-styles.css';
import picture from '../assets/me.jpg';

export const CardGridHeader = ({ candidate }) => {
  if (candidate)
    return (
      <header className="popular-header header-card">
        <h2 className="header-card-title">
          {candidate.FirstName} {candidate.LastName}
        </h2>
        <img className="picture blur" src={picture} alt="Heni"/>
        <p className="header-card-sponsor">
          {candidate.Email} <br />
          {candidate.Tel} <br />
          {candidate.Address.Postal} {candidate.Address.City}
        </p>
      </header>
    );
  else return null;
};
