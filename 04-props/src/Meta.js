import React from 'react';


//SEO 처리
import {Helmet, HelmetProvider} from 'react-helmet-async'
import avatar from './assets/images/avatar.svg'


const Meta = (props) => {
    return (
        <div>
            <HelmetProvider >
                <Helmet>
                    <title>{props.title}</title>


                    {/* 폰트 적용 */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                </Helmet>
            </HelmetProvider>
        </div>
    );
};




Meta.defaultProps = {
    title : 'react',
    description : 'react 예제',
    author : '호썜수강생',
    subject : 'react.js',
    copyright: '호쌤',
    keywords: 'react',
    url : window.location.href,
    image : avatar,
    icon: null,
    shoutcutIcon : null,
    appleTouchIcon : null,

}




export default Meta;