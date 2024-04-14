import React from 'react'
import { CardContainer } from '../../components/cardContainer/CardContainer'
import { Banner} from '../../components/banner/Banner'


export const Home = () => {
  return (
    <main>
      <Banner pageTag="Home"/>
      <CardContainer />
    </main>    
  )
}
