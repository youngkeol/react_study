import React from 'react';
import './CoreConcept.css';

const CoreConcept = ({image, title, description}) => {
    return (
        <li>
            <img src={image} art={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default CoreConcept;