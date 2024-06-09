import React from 'react'; //리액트 기본을 구성하는 패키지
import ReactDOM from 'react-dom/client'; //리액트가 DOM을 구성하기 위한 기능 참조

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

