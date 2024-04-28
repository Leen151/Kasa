import React from 'react'
import './aboutPage.scss'
import { Banner} from '../../components/banner/Banner'
import { Collapse } from '../../components/collapse/Collapse'

import { getDatasAbout } from '../../data/api'

export const AboutPage = () => {
  const dataAbout = getDatasAbout();

  return (
    <main className="about-page">
      
      <Banner pageTag="About"/>

      <div className="about-collapse">
        {dataAbout.map((about) => (
          <Collapse key={about.id} title={about.title} content={about.content} />
        ))}
      </div>

    </main>
  )
}