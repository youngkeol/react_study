import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import TabButton from './components/TabButton.jsx';






function App() {
    //최상위 레벨이 정의
    let [ selectedTopic, setSelectedTopic] = useState("components");

    function handleSelect(selectedButton){
        console.log(`handleSelect ${selectedButton}`);
        setSelectedTopic(selectedButton);
    }
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item, index) => {
                            return (
                                <CoreConcept 
                                    {...item}  
                                    key = {index}
                                />
                            )
                        })}
                    </ul>
                </section>
                <section id="examples">
                        <h2>Examples</h2>
                        <menu>
                            <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
                            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                        </menu>
                        <div id='tab-content'>
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>
                                    {EXAMPLES[selectedTopic].code}
                                </code>
                            </pre>
                        </div>
                </section>
            </main>
        </div>
    );
}

export default App;