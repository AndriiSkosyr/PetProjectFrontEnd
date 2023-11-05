import React from 'react'
import './home.css'
import CalendarsList from '../Components/Lists/CalendarsList'

const Home = () => {
    return (
        <div className='wrapper'>
            <div className='CalendarsList'>
                <CalendarsList />
            </div>
            <div className='RecentEventsList'>EventsList</div>
            <div className='RecentMeetingsList'>MeetingsLIst</div>
            <div className='GoogleCalendar'>GoogleCalendar</div>
            <div className='ControlPanel'>
                <button type='submit'>Submit</button>
            </div>
            <></>
        </div>
    )
}

export default Home