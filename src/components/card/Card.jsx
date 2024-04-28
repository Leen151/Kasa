import React from "react";
import "./card.scss";

export const Card = ({logement}) => {
  return (
    <article className="logement-card">
      <img src={logement.cover} alt={logement.title} className="card-cover"/>
      <h3 className="card-title">{logement.title}</h3>
    </article>
  );
};
