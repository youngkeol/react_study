import React from 'react';
import CoreConcept from './CoreConcept';
import Section from './Section';
import { CORE_CONCEPTS } from '../data';

const CoreConcepts = () => {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem, index) => {
                    return (
                        <CoreConcept
                            {...conceptItem}
                            key={index}
                        />
                    )
                })}
            </ul>
        </Section>
    );
};

export default CoreConcepts;