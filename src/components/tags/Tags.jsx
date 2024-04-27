import React from 'react'
import './tags.scss'

export const Tags = ({tags}) => {
    return (
        <ul className="logement-tags">
            {tags.map((tag, index) => (
            <li key={index} className="tag">{tag}</li>
            ))}
        </ul>
    );
  };
