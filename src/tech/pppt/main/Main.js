import React from 'react'
import './Main.css'
import { Section } from '../section/Section'

const product = {
  pros: [],
  cons: []
}

const process = {
  pros: [],
  cons: []
}

const people = {
  pros: [],
  cons: [
    { text: 'Fulano é muito chato'}
  ]
}

const tools = {
  pros: [],
  cons: []
}

const Main = props => {
  return <div>
    <h1>PPPT</h1>
    <Section title="Product" data={product}/>
    <Section title="Process" data={process}/>
    <Section title="People" data={people}/>
    <Section title="Tools" data={tools}/>
  </div>
}

export { Main }