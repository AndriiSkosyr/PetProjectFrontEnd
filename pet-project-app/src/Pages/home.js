import React from 'react'
import './home.css'
import CalendarsList from '../Components/Lists/CalendarsList'
import EventsList from '../Components/Lists/EventsList'
import MeetingsList from '../Components/Lists/MeetingsList'


const Home = () => {
    return (
        <div className='wrapper'>
            <div className='CalendarsList'>
                <CalendarsList />
            </div>
            <div className='RecentEventsList'>
                <EventsList />
            </div>
            <div className='RecentMeetingsList'>
                <MeetingsList />
            </div>
            <div className='GoogleCalendar'>GoogleCalendar</div>
            <div className='ControlPanel'>
                <button type='submit'>Submit</button>
            </div>
            <></>
        </div>
    )
}

export default Home