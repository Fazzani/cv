import React from 'react';
import './card-grid-header-styles.css';
import picture from '../assets/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cvpdf from '../assets/cv.pdf';

export const CardGridHeader = ({ candidate }) => {
  if (candidate)
    return (
      <header className="popular-header header-card">
        <h2 className="header-card-title">
          {candidate.FirstName} {candidate.LastName}
        </h2>
        <img className="picture" src={picture} alt="Heni" />
        <p className="header-card-sponsor">
          <FontAwesomeIcon icon={['fas', 'at']} size="1x" /> {candidate.Email} <br />
          <FontAwesomeIcon icon={['fas', 'phone-square']} size="1x" /> {candidate.Tel} <br />
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} size="1x" /> {candidate.Address.Postal} {candidate.Address.City}
        </p>
        <div className="social" title="Github account">
          <a href={candidate.Github}>
            <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="black" />
          </a>

          <a href={candidate.Linkedin} title="Linkedin account">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" color="black" />
          </a>

          <a href={cvpdf} alt="CV" title="Download CV">
            <FontAwesomeIcon icon={['fas', 'file-download']} size="2x" color="black" />
          </a>
        </div>
      </header>
    );
  else return null;
};
