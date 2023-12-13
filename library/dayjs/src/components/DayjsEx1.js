import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 가져오기

const DayjsEx1 = () => {
    const day = dayjs(); //객체 생성
    day.format(); //원하는 형태로 변환

    console.log();
    return (
        <>
            <h2>dayjs 날짜 출력1</h2>
            <hr />
            <ul>
                <li>get("year") : {day.get("year")}</li>
                <li>get("y") : {day.get("y")}</li>

                <li>get("month") : {day.get("month")} (0~11)</li>
                <li>get("M") : {day.get("M")} (0~11)</li>

                <li>get("date") : {day.get("date")}</li>
                <li>get("D") : {day.get("D")}</li>

                <li>
                    get("day") : {day.get("day")} (요일 - 일요일 : 0, 토요일 :
                    6)
                </li>
                <li>
                    get("d") : {day.get("d")} (요일 - 일요일 : 0, 토요일 : 6){" "}
                </li>

                <li>get("hour") : {day.get("hour")}</li>
                <li>get("h") : {day.get("h")}</li>

                <li>get("minute") : {day.get("minute")}</li>
                <li>get("m") : {day.get("m")}</li>

                <li>get("second") : {day.get("second")}</li>
                <li>get("s") : {day.get("s")}</li>
            </ul>
        </>
    );
};

export default DayjsEx1;
