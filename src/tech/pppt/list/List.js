import React, { Component } from 'react'
import './List.css'
import { Item } from '../item/Item'

class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <section className="list">
            <h4>{this.props.title}</h4>
            <ul>
                {this.props.items.map(item => (
                    <Item text={item.text} />
                ))}
                <li>
                    <button>Novo item</button>
                </li>
            </ul>
        </section>
    }
}

export { List }