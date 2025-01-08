import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/DayCalender.css';

const events = [
  { title: ' Invocation', start: '2025-02-01T09:30:00', end: '2025-02-01T09:35:00', color: '#1E90FF' },
  { title: ' Welcome Address', start: '2025-02-01T09:35:00', end: '2025-02-01T09:40:00', color: '#32CD32' },
  { title: ' About Electrowiz\'25', start: '2025-02-01T09:40:00', end: '2025-02-01T09:45:00', color: '#FFD700' },
  { title: ' Felicitation', start: '2025-02-01T09:45:00', end: '2025-02-01T09:50:00', color: '#FF4500' },
  { title: ' Presidential Address', start: '2025-02-01T09:50:00', end: '2025-02-01T09:55:00', color: '#8A2BE2' },
  { title: ' Release of Souvenier & Digi Mail', start: '2025-02-01T09:55:00', end: '2025-02-01T10:00:00', color: '#FF69B4' },
  { title: ' Inaugural Address', start: '2025-02-01T10:00:00', end: '2025-02-01T10:10:00', color: '#00CED1' },
  { title: ' Vote of Thanks', start: '2025-02-01T10:10:00', end: '2025-02-01T10:15:00', color: '#FF6347' },
  { title: ' Electrowiz Events', start: '2025-02-01T10:15:00', end: '2025-02-01T13:00:00', color: '#4682B4' },
  { title: ' Lunch Break', start: '2025-02-01T13:00:00', end: '2025-02-01T14:00:00', color: '#FFD700' },
  { title: ' Events cont..', start: '2025-02-01T14:00:00', end: '2025-02-01T15:30:00', color: '#4682B4' },
  { title: ' Prize Distribution', start: '2025-02-01T15:30:00', end: '2025-02-01T16:00:00', color: '#FF4500' },
  { title: ' Dispersal', start: '2025-02-01T16:00:00', end: '2025-02-01T16:30:00', color: '#32CD32' }
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
            left: '',
            center: 'title',
            right: '',
          }}
          buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
          }}
          eventColor="#378006"
          height="auto"
          slotMinTime="09:30:00"
          slotMaxTime="16:10:00"
          slotDuration="00:05:00"
          eventOverlap={false}
          eventContent={renderEventContent} 
        />
      </div>
    </div>
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <>
      <i className="event-icon"></i>
      <b>{eventInfo.timeText}     </b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};

export default Calendar;