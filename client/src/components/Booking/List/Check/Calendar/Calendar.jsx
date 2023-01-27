import { useState } from "react";
import './Calendar.css'



let Calendar = () => {


    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const handlePrevMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() - 1);
        setDate(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + 1);
        setDate(newDate);
    };

    const isSunday = day => {
        return day.getDay() === 0;
    };

    const isCurrentMonth = day => {
        return day.getMonth() === date.getMonth();
    };


    const isPastDate = day => {
        const today = new Date();
        return day.getTime() < new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    };

    const renderHeader = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        return (
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <span>
                    {months[date.getMonth()]} {date.getFullYear()}
                </span>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
        );
    };

    const renderDays = () => {
        const days = [];
        const startDate = new Date(date);
        startDate.setDate(1);
        const startDay = startDate.getDay();
        for (let i = 0; i < 42; i++) {
            const day = new Date(startDate);
            day.setDate(day.getDate() + i - startDay);
            if (!isCurrentMonth(day)) {
                continue;
            }
            const isSelected = day.getTime() === selectedDate?.getTime();
            const isToday = day.toDateString() === new Date().toDateString();
            days.push(
                <div
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''
                        } ${isSunday(day) ? 'sunday' : ''}${isPastDate(day) ? 'past-date' : ''}`}
                    key={i}
                    onClick={() => {
                        let TheDay;
                        let Span;
                        if (!isSunday(day) && !isPastDate(day)) {
                            setSelectedDate(day);
                            TheDay = day.getDate()
                        }
                        else {
                            TheDay = 0
                        }
                        Span = document.querySelector('.calendar span').innerHTML
                        document.querySelector('.date h3').innerHTML = TheDay + "  " + Span
                    }}>
                    {day.getDate()}
                </div>
            );
        }
        return <div className="calendar-days">{days}</div>;
    };

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
        </div>
    );
}



export default Calendar
