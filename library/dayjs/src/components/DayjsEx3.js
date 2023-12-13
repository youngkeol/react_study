import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 가져오기

const DayjsEx3 = () => {
    const day1 = dayjs("2023-12-12 10:10:10.000", "YYYY-MM-DD HH:mm:ss.SSS");
    const day2 = dayjs("2022-10-15 14:12:50.000", "YYYY-MM-DD HH:mm:ss.SSS");

    return (
        <>
            <h2>dayjs 날짜 출력3</h2>
            <hr />
            <ul>
                <li>
                    날짜 1 : {day1.format("YYYY-MM-DD HH:mm:ss.SSS")}, 날짜 2 :{" "}
                    {day2.format("YYYY-MM-DD HH:mm:ss.SSS")}
                </li>
                <li>년도 차이 {day1.diff(day2, "year")}</li>
                <li>년도 차이 {day1.diff(day2, "y")}</li>

                <li>월 차이 {day1.diff(day2, "month")}</li>
                <li>월 차이 {day1.diff(day2, "M")}</li>

                <li>일 차이 {day1.diff(day2, "day")}</li>
                <li>일 차이 {day1.diff(day2, "d")}</li>

                <li>주 차이 {day1.diff(day2, "week")}</li>
                <li>주 차이 {day1.diff(day2, "w")}</li>

                <li>시간 차이 {day1.diff(day2, "hour")}</li>
                <li>시간 차이 {day1.diff(day2, "h")}</li>
                <li>분 차이 {day1.diff(day2, "minute")}</li>
                <li>분 차이 {day1.diff(day2, "m")}</li>
                <li>초 차이 {day1.diff(day2, "second")}</li>
                <li>초 차이 {day1.diff(day2, "s")}</li>
            </ul>
        </>
    );
};

export default DayjsEx3;
