import dummy from '../db/data.json';

export default function DayList() {
    return (
        <div>
            <ul className='list_day'>
                {dummy.words.map(day => {
                    <li key={day.id}>Day {day.day}</li>
                })}
            </ul>
        </div>
    )
}