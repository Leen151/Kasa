import React from 'react';
import './logementPage.scss'
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../errorPage/ErrorPage'
import { Collapse } from '../../components/collapse/Collapse';
import { Slider } from '../../components/slider/Slider';
import { Tags } from '../../components/tags/Tags';
import { Rating } from '../../components/rating/Rating';
import { Host } from '../../components/host/Host';

import { getLogementById } from '../../data/api';

export const LogementPage =  () => {
	const { id } = useParams();
  const logement = getLogementById(id);

  if (logement === undefined) {
    return <ErrorPage />;
  }

  return (
    <main className="logement-page">
        <Slider pictures={logement.pictures}/>

        <section className="logement-informations">

          <div className="logement-main-information">
            <h1 className="logement-title">{logement.title}</h1>
            <p className="logement-location">{logement.location}</p>
            <Tags tags={logement.tags}/>
          </div>

          <div className="logement-additional-information">
            <Host hostName={logement.host.name} hostPicture={logement.host.picture}/>
            <Rating rating= {logement.rating}/>
          </div>

        </section>

        <section className="logement-details">
          <Collapse title="Description" content={logement.description}/>
          <Collapse title="Équipements" content={logement.equipments}/>
        </section>
    </main>
  )
}

