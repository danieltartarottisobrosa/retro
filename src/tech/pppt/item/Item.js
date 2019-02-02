import React from 'react'
import './Item.css'

function Item(props) {
    const onDelete = props.onDelete || (() => {})

    function handleClick() {
        onDelete(props.data)
    }

    return <li>
        {props.data.text}
        <button onClick={handleClick}>x</button>
    </li>
}

export { Item }