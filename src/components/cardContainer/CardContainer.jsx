import React from 'react'
import './cardContainer.scss'
import data from '../../data/logements.json'
import { Card } from '../card/Card'
import { Link } from 'react-router-dom'

export const CardContainer = () => {
  return (
    <section className='card-container'>
        {data.map((logement) => (
            // <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Link key={logement.id} to={{pathname: "/logement/" + logement.id}}>
            <Card logement={logement}/>
          </Link>
        ))}
    </section>
  )
}

