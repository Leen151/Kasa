import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '../errorPage/ErrorPage'
import data from '../../data/logements.json'

export const LogementPage =  () => {
	const { id } = useParams();
	const logement = data.find(data => data.id === id);

  if (logement === undefined) {
    return <ErrorPage />;
  }

  return (
    <main>
      <h1>logement</h1>
        <div>
          <h3>{logement.title}</h3>
        </div>
    </main>
  )
}

