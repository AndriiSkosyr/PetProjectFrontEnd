import React, { useState } from "react";

const CalendarsList = () => {
    const [calendarsArray, setCalendars] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        GetCalendars();
        console.log(calendarsArray);
    }

    const GetCalendars = async () => {
        await fetch("http://127.0.0.1:5000/calendar", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setCalendars(response)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    return (
        <>
            <ul>
                {calendarsArray.map(item => {
                    return <li id={item.CalendarId}>{item.CalendarName}</li>
                })}
            </ul>
            <button type="submit" onClick={handleSubmit}>Get info</button>

        </>
    )
}

export default CalendarsList