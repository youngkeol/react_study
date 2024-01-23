import React from 'react';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';

const CoreConcepts = () => {
    return (
        <section id="core-concepts">
            <h2>Time to get ÷ started!</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept
                        key={conceptItem.image}
                        title={conceptItem.title}
                        description={conceptItem.description}
                        image={conceptItem.image}
                    />

                ))}
            </ul>
        </section>
    );
};

export default CoreConcepts;