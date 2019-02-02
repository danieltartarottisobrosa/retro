import React, { Component } from 'react'
import uuid from 'uuid/v1'

import './Main.css'

import { Section } from '../section/Section'
import { List } from '../list/List'
import { Item } from '../item/Item'

class Main extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      product: {
        pros: [
          { id: uuid(), text: 'Nós fizemos um produto muito foda'}],
        cons: []
      },
      process: {
        pros: [],
        cons: []
      },
      people: {
        pros: [],
        cons: [
          { id: uuid(), text: 'Fulano é muito chato'},
          { id: uuid(), text: 'Não dá pra trabalhar com o Sicrano'}
        ]
      },
      tools: {
        pros: [],
        cons: []
      }
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleNew = this.handleNew.bind(this)
  }

  handleDelete(collection, list) {
    return item => {
      const items = this.state[collection][list]
      const index = items.findIndex(i => i.id === item.id)
      alert(`Deveria remover o item ${index}) ${item.text}.`)
    }
  }

  handleNew(collection, list) {
    return () => {
      const text = prompt("Descrição do item:")
      this.setState(state => ({
          [collection]: {
            [list]: [...state[collection][list], { id: uuid(), text }]
          }
        }))
    }
  }

  renderSection(title, collection) {
    const items = this.state[collection]

    return (
      <Section title={title}>
        <List title="Prós" onNew={this.handleNew(collection, "pros")}>
          {items.pros.map(item => (
            <Item key={item.id} data={item} onDelete={this.handleDelete(collection, "pros")} />
          ))}
        </List>
        <List title="Contras" onNew={this.handleNew(collection, "cons")}>
          {items.cons.map(item => (
            <Item key={item.id} data={item} onDelete={this.handleDelete(collection, "cons")} />
          ))}
        </List>
      </Section>
    )
  }

  render() {
    return <div>
      <h1>PPPT</h1>
      {this.renderSection("Product", "product")}
      {this.renderSection("Process", "process")}
      {this.renderSection("People", "people")}
      {this.renderSection("Tools", "tools")}
    </div>
  }
}

export { Main }