import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 가져오기

const DayjsEx4 = () => {
    const day1 = dayjs("2023-12-12 10:10:10.000", "YYYY-MM-DD HH:mm:ss.SSS");
    const day2 = dayjs("2022-10-15 14:12:50.000", "YYYY-MM-DD HH:mm:ss.SSS");

    function getTimeDiff(timeToCompare) {
        const yearDiff = parseInt(dayjs().diff(timeToCompare, "y"));
        const monthDiff = parseInt(dayjs().diff(timeToCompare, "M"));
        const dateDiff = parseInt(dayjs().diff(timeToCompare, "d"));
        const hourDiff = parseInt(dayjs().diff(timeToCompare, "h"));
        const minuteDiff = parseInt(dayjs().diff(timeToCompare, "m"));
        const secondDiff = parseInt(dayjs().diff(timeToCompare, "s"));

        if (yearDiff > 0) {
            return `${yearDiff}년 전`;
        } else if (monthDiff > 0) {
            return `${monthDiff}달 전`;
        } else if (dateDiff > 0) {
            return `${dateDiff}일 전`;
        } else if (hourDiff > 0) {
            return `${hourDiff}시간 전`;
        } else if (minuteDiff > 0) {
            return `${minuteDiff}분 전`;
        } else if (secondDiff > 0) {
            return `${secondDiff}초 전`;
        } else {
            return "";
        }
    }
    getTimeDiff(day2);
    return (
        <>
            <h2>dayjs 날짜 출력4</h2>
            <hr />
            <ul>
                <li>
                    날짜 1 : {day1.format("YYYY-MM-DD HH:mm:ss.SSS")} //{" "}
                    {getTimeDiff(day1)}
                </li>

                <li>
                    날짜 1 : {day2.format("YYYY-MM-DD HH:mm:ss.SSS")} //{" "}
                    {getTimeDiff(day2)}
                </li>
            </ul>
        </>
    );
};

export default DayjsEx4;
