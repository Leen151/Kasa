import React from 'react'
import { Banner} from '../../components/banner/Banner'
import { Collapse } from '../../components/collapse/Collapse'
import dataAbout from '../../data/about.json'

export const AboutPage = () => {
  return (
    <main>
      <Banner pageTag="About"/>

      {dataAbout.map((about) => (
        <Collapse key={about.id} props={about} />
      ))}

    </main>
  )
}