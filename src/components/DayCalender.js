import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/DayCalender.css';

const events = [
    { title: 'Opening Ceremony', start: '2025-02-01T09:00:00' },
    { title: 'Keynote Speech', start: '2025-02-01T10:00:00' },
    { title: 'Lunch Break', start: '2025-02-01T13:00:00' },
];

const Calendar = () => {
    return (
        <div>
            <div className="homeText">
                Event Schedule
            </div>
            <div className="calendar-container">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridDay"
                    initialDate="2025-02-01"
                    events={events}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                    }}
                    eventColor="#378006" // Customize event color
                    height="auto"
                    slotMinTime="08:30:00"
                    slotMaxTime="17:00:00"
                />
            </div>
        </div>
    );
};

export default Calendar;