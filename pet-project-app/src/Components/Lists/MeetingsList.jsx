import React, { useState, useEffect } from "react";

const MeetingsList = () => {
    const [meetingsArray, setMeetings] = useState([])

    useEffect(() => {        
        GetMeetings();
    },[]);    

    const GetMeetings = async () => {
        await fetch("http://127.0.0.1:5000/meeting", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setMeetings(response)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    return (
        <>
            <ul>
                {meetingsArray.map(item => {
                    return <li id={item.MeetingId}>{item.MeetingName}</li>
                })}
            </ul>          
        </>
    )
}

export default MeetingsList