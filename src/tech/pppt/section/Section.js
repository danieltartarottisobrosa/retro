import React, { Component } from 'react'
import './Section.css'
import { List } from '../list/List'

class Section extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return <section className="section">
            <h2>{this.props.title}</h2>
            <div>
                <List title="Prós" items={this.props.data.pros} />
                <List title="Contras" items={this.props.data.cons} />
            </div>
        </section>
    }
}

export { Section }