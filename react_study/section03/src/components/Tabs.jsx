import React from 'react';

const Tabs = ({children, buttons, ButtonContainer = 'menu'}) => {
    //const ButtonContainer = buttonContainer;

    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    );
};

export default Tabs;