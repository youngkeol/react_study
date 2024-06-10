import React, {useState} from 'react';
import TabButton from './TabButton';
import Section from './Section';
import { EXAMPLES } from '../data';
import Tabs from './Tabs';


const Examples = () => {
    //최상위 레벨이 정의
    let [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        //console.log(`handleSelect ${selectedButton}`);
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].descriptions}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
        )
    }


    return (
        <Section title="Examples" id="examples">
            

            <Tabs
                ButtonContainer="menu" 
                buttons={<><TabButton
                    isSelected={selectedTopic == 'components' ? true : false}
                    onClick={() => handleSelect('components')}
                    >Component
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic == 'jsx' ? true : false}
                        onClick={() => handleSelect('jsx')}
                    >JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic == 'props' ? true : false}
                        onClick={() => handleSelect('props')}
                    >Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic == 'state' ? true : false}
                        onClick={() => handleSelect('state')}
                    >State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
};

export default Examples;