import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko"; // 한국어 가져오기

const DayjsEx2 = () => {
    const day = dayjs();
    return (
        <>
            <h2>dayjs 날짜 출력2</h2>
            <hr />
            <ul>
                <li>현재 날짜 출력 : {day.format("YYYY-MM-DD")}</li>
                <li>
                    7일전 날짜 출력 : {day.add(-7, "d").format("YYYY-MM-DD")}
                </li>

                <li>
                    7일전 날짜 출력 :{" "}
                    {day.subtract(7, "d").format("YYYY-MM-DD")}
                </li>

                <li>
                    한달전 날짜 출력 : {day.add(-1, "M").format("YYYY-MM-DD")}
                </li>
                <li>
                    한달전 날짜 출력 :{" "}
                    {day.subtract(1, "M").format("YYYY-MM-DD")}
                </li>
            </ul>
        </>
    );
};

export default DayjsEx2;
