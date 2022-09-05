
import React, { useState } from 'react'

function ColorBlock(props){
    let [input, setInput] = useState('')
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
