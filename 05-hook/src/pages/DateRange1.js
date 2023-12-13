import React, { useState } from "react";
import dayjs from "dayjs"; //for 날짜 처리
import "dayjs/locale/ko"; //한국어 셋팅

const DateRange1 = () => {
    const day = dayjs();
    console.log(day);
    console.log(day.format("YYYY-MM-DD"));

    //const [myDate, setMyDate] = useState(day.format('YYYY-MM-DD'));
    const [myDate, setMyDate] = useState({
        startDate: day.format("YYYY-MM-DD"),
        endDate: day.format("YYYY-MM-DD"),
    });

    console.log(myDate);
    return (
        <div>
            <h2>DateRange1</h2>
            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>
            <p>
                <button
                    type="button"
                    onClick={(e) => {
                        const copyDate = {
                            ...myDate,
                            startDate: day.add(-7, "d").format("YYYY-MM-DD"),
                        };
                        setMyDate(copyDate);
                    }}
                >
                    7일전
                </button>

                <button
                    type="button"
                    onClick={(e) => {
                        const copyDate = {
                            ...myDate,
                            startDate: day.add(-1, "M").format("YYYY-MM-DD"),
                        };
                        setMyDate(copyDate);
                    }}
                >
                    1달전
                </button>
            </p>
        </div>
    );
};

export default DateRange1;
