import React, { useState } from 'react'
import './collapse.scss'

export const Collapse = ({props}) => {
    const [unfolded, setUnfolded] = useState(false)

    const toggle = () => {
        setUnfolded(!unfolded);
    }

    return (
    <div className="collapse">    
        <h3 className="collapse-title" onClick={toggle}>{props.title} </h3>
        <div className={`collapse-text${unfolded ? " active" : ""}`}>{props.content}</div>
    </div>
)
}
