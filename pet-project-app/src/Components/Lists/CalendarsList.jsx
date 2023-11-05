import React from "react";

const CalendarsList = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("amogus");
        GetCalendars(1)
      }

    const GetCalendars = async (calendarId) => {
        await fetch("http://127.0.0.1:5000/calendar", {
            method: "GET",
            body: JSON.stringify({
                calendarId: calendarId,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
                <button type="submit" onClick={handleSubmit}>Get info</button>
            </ul>

        </>
    )
}

export default CalendarsList