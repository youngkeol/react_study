import React from 'react';

const If1 = () => {
    const btnLogin = (isLogin) => {
        if(isLogin === true) {
            return (<button>Login</button>)
        } else {
            return (<button>Logout</button>)
        }
    }
    return (
        <div>
            <h1>If1</h1>
            {btnLogin(true)}
        </div>
    );
};

export default If1;