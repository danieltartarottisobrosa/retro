import React, { Component } from 'react'
import './Section.css'
import { List } from '../list/List'

class Section extends Component {
    render() {
        return <section className="section">
            <h2>{this.props.title}</h2>
            {this.props.children}
        </section>
    }
}

export { Section }