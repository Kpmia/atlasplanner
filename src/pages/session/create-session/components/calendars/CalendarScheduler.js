import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import uuid from "react-uuid"
import momentTimezonePlugin from '@fullcalendar/moment-timezone';
import moment from "moment"
import { SessionUtils } from "../../../../mentors/utils/SessionUtils";

const CalendarScheduler = ({setTimeslots, ...restProps}) => {
    const [calendarState, setCalendarState] = useState({
      weekendsVisible: true,
      currentEvents: []
    })
    const calendarAPI = React.useRef(null)

    const handleDateSelect = (selectInfo) => {
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect() 
        calendarApi.addEvent({
            id: uuid(),
            timezone: "local",
            title: "",
            start: selectInfo.startStr,
            backgroundColor: 'black',
            end: selectInfo.endStr,
            allDay: false
        })
    }

    const reformatTimeslot = (data) => {
        var timeslotArr = []
        data.map((slot) => {
            timeslotArr.push({
                start: new Date(moment(slot._instance.range.start).add(4, 'hours')),
                end:  new Date(moment(slot._instance.range.end).add(4, 'hours'))
            })
        })
        timeslotArr = SessionUtils.reformatTimeslots(timeslotArr);
        setTimeslots(timeslotArr)
    };

    const handleEventClick = (clickInfo) => {
      if (window.confirm(`Are you sure you want to delete this timeslot?`)) {
        clickInfo.event.remove()
      }
    }

    const handleEvents = (events) => {
      setCalendarState({
        ...calendarState,
        currentEvents: events
      })
      reformatTimeslot(events)
    }

    const renderEventContent = (eventInfo) => {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
    }

    return (
      <div>
        <div style={{width: '700px'}}>
          <FullCalendar
            ref={calendarAPI}
          allDaySlot={false}
          defaultAllDay={false}
              plugins={[interactionPlugin,dayGridPlugin, timeGridPlugin, momentTimezonePlugin]}
              headerToolbar={{
              left: 'prev',
              center: 'title',
              right: 'next'
            }}
            initialView='timeGridWeek'
            eventDurationEditable
            events={{
              display: 'background'
            }}
            duration={30}
            height={500}
            
            resourceAreaWidth='80px'
            resourceAreaHeaderContent= ' '
            editable={true}
            selectable={true}
            dayMaxEvents={true}       
            weekends={calendarState.weekendsVisible}
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            eventDidMount={ function (info) {
              if (info.event.extendedProps.background) {
                  info.el.style.backgroundColor = 'black'
                  info.el.style.background = info.event.extendedProps.background;
                  info.el.style.backgroundSize = '500%';
              }
          }}
          />
        </div>
      </div>
    )
  }
  
export default CalendarScheduler

