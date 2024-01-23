import React from 'react';
import "./CoreConcept.css";

const CoreConcept = (props) => {
    return (
        <li>
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>

    );
};

export default CoreConcept;