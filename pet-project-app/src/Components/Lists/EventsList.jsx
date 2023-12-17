import React, { useState, useEffect } from "react";

const EventsList = () => {
    const [eventsArray, setEvents] = useState([])

    useEffect(() => {        
        GetEvents();
    },[]);    

    const GetEvents = async () => {
        await fetch("http://127.0.0.1:5000/event", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setEvents(response)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    return (
        <>
            <ul>
                {eventsArray.map(item => {
                    return <li id={item.EventId}>{item.EventName}</li>
                })}
            </ul>          
        </>
    )
}

export default EventsList