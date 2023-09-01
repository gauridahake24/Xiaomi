// HomePageCard.js
import React from 'react';

const HomePageCard = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="home-page-card">
      <h1 className="home-page-card-title">{title}</h1>
      <p>{description}</p>
      <button className="home-page-card-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default HomePageCard;
