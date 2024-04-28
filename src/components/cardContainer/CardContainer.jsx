import React from "react";
import "./cardContainer.scss";
import { Card } from "../card/Card";
import { Link } from "react-router-dom";

import { getLogements } from "../../data/api";

const logements = getLogements();

export const CardContainer = () => {
  return (
    <section className='card-container'>
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Card logement={logement}/>
        </Link>
      ))}
    </section>
  );
};

