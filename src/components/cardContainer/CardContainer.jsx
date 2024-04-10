import React from 'react'
import './cardContainer.scss'
import { Card } from '../card/Card'
import data from '../../data/logements.json'

export const CardContainer = () => {
  return (
    <section className='card-container'>
        {data.map((logement) => (
            <Card key={logement.id} logement={logement}/>
        ))}
    </section>
  )
}

