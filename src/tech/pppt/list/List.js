import React from 'react'
import './List.css'
import { Item } from '../item/Item'

function List(props) {
    const onNew = props.onNew || (() => {})

    function handleClick() {
        onNew()
    }

    return <section className="list">
        <h4>{props.title}</h4>
        <ul>
            {props.children}
            <li>
                <button onClick={handleClick}>Novo item</button>
            </li>
        </ul>
    </section>
}

export { List }