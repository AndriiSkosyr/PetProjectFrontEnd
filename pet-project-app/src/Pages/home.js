import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <div className='wrapper'>
                <div className='CalendarsList'>CalendarsList</div>
                <div className='RecentEventsList'>EventsList</div>
                <div className='RecentMeetingsList'>MeetingsLIst</div>
                <div className='GoogleCalendar'>GoogleCalendar</div>
                <div className='ControlPanel'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Home