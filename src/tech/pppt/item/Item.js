import React from 'react'
import './Item.css'

function Item(props) {
    return <li>{props.text}{' '}<button>x</button></li>
}

export { Item }