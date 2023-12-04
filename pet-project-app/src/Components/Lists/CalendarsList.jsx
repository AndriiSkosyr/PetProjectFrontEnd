import React, { useState, useEffect } from "react";

const CalendarsList = () => {
    const [calendarsArray, setCalendars] = useState([])

    useEffect(() => {        
        GetCalendars();
    },[]);    

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
        </>
    )
}

export default CalendarsList