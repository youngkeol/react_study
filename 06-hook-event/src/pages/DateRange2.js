import React, { useReducer } from "react";
import dayjs from "dayjs";

function setDateValue(state, action) {
    switch (action) {
        case "DAY1":
            return;
    }
}

const DateRange2 = () => {
    const [date, setDate] = useReducer(setDateValue, {
        startDate: dayjs.format("YYYY-MM-DD"),
        endDate: dayjs.format("YYYY-MM-DD"),
    });
    return (
        <div>
            <h2>DateRange2</h2>
            <p>
                {date.startDate} ~ {date.endDate}
            </p>
            <p>
                <button onClick={(e) => setDate("DAY1")}>1일전</button>
                <button onClick={(e) => setDate("DAY7")}>7일전</button>
                <button onClick={(e) => setDate("DAY15")}>15일전</button>
                <button onClick={(e) => setDate("MON1")}>1달전</button>
            </p>
        </div>
    );
};

export default DateRange2;
