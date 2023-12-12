import React, { memo, useMemo, useState } from "react";
import styled from "styled-components";

import img01 from "../assets/img/avatar1.png";
import img02 from "../assets/img/avatar2.png";
import img03 from "../assets/img/avatar3.png";
import img04 from "../assets/img/avatar4.png";

const ThumList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin: auto;
    display: flex;
    li {
        width: 20%;
        a {
            display: block;
            margin: 10px;

            img {
                width: 100%;
            }
        }
    }
`;

const Viewer = styled.div`
    border: 1px solid #ddd;
    text-align: center;
`;

const imgList = [
    { img: img01, title: "테스트 이미지 1" },
    { img: img02, title: "테스트 이미지 2" },
    { img: img03, title: "테스트 이미지 3" },
    { img: img04, title: "테스트 이미지 4" },
];

const ImageEx = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onThumbnailClick = (e) => {
        console.log(e.currentTarget);
        const href = e.currentTarget.getAttribute("href");
        const idx = parseInt(href.substring(1));

        console.log(idx);

        //일반 상태값 변경
        //setCurrentIndex(idx);

        setCurrentIndex((currentValue) => {
            console.log(`변경전 : ${currentValue}`);
            const newValue = idx;
            console.log(`변경전 : ${newValue}`);
            return newValue;
        });
    };

    const { img: currentImg, title: currentTitle } = useMemo(() => {
        return imgList[currentIndex];
    }, [currentIndex]);

    return (
        <div>
            <h2>ImageEx</h2>
            <ThumList>
                {imgList.map((v, i) => {
                    return (
                        <li key={i}>
                            <a
                                href={`#${i}`}
                                title={v.title}
                                onClick={onThumbnailClick}
                            >
                                <img src={v.img} alt={v.title}></img>
                            </a>
                        </li>
                    );
                })}
            </ThumList>
            <Viewer>
                <img
                    src={imgList[currentIndex].img}
                    alt={imgList[currentIndex].title}
                />

                <img src={currentImg} alt={currentTitle} />
            </Viewer>
        </div>
    );
});

export default ImageEx;
