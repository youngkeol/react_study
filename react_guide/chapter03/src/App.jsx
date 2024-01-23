import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';


import { CORE_CONCEPTS } from './data';
import Tabutton from './components/Tabutton';
import { useState } from 'react';
import {EXAMPLES} from './data.js';


function App() {
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
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get ÷ started!</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => (
                            <CoreConcept
                                key = {conceptItem.image}
                                title={conceptItem.title}
                                description={conceptItem.description}
                                image={conceptItem.image}
                            />

                        ))}
                    </ul>   
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <Tabutton 
                            isSelected={selectedTopic =='components'} 
                            onSelect={(e) => handleClick('components')}>Compoents
                        </Tabutton>
                        <Tabutton 
                            isSelected={selectedTopic =='jsx'} 
                            onSelect={(e) => handleClick('jsx')}>Jsx
                        </Tabutton>
                        <Tabutton 
                            isSelected={selectedTopic =='props'} 
                            onSelect={(e) => handleClick('props')}>Props
                        </Tabutton>
                        <Tabutton 
                            isSelected={selectedTopic =='state'} 
                            onSelect={(e) => handleClick('state')}>States
                        </Tabutton>
                    </menu>
                    
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
