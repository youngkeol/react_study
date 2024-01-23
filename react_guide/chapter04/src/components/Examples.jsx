import React, { useState } from 'react';


import {EXAMPLES} from '../data.js';
import Section from './Section.jsx';
import Tabutton from './Tabutton.jsx';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] =  useState();

    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
    }

    let tabContent =  (<p>Please select a topic.</p>);
    if(selectedTopic) {
        tabContent = (<
            div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
    )}



    return (
        <Section title="Examples"id="examples">
            <menu>
                <Tabutton
                    isSelected={selectedTopic == 'components'}
                    onSelect={(e) => handleClick('components')}>Compoents
                </Tabutton>
                <Tabutton
                    isSelected={selectedTopic == 'jsx'}
                    onSelect={(e) => handleClick('jsx')}>Jsx
                </Tabutton>
                <Tabutton
                    isSelected={selectedTopic == 'props'}
                    onSelect={(e) => handleClick('props')}>Props
                </Tabutton>
                <Tabutton
                    isSelected={selectedTopic == 'state'}
                    onSelect={(e) => handleClick('state')}>States
                </Tabutton>
            </menu>

            {tabContent}
        </Section>
    );
};

export default Examples;