import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import uuid from "react-uuid"
import momentTimezonePlugin from '@fullcalendar/moment-timezone';
import moment from "moment"

const reformatEvents = (events) => {
    var eventsBody = []
    events["timeslots"].map((slot) => {
        var bgColor = "green"
        var title = ""
        if (Object.keys(slot["filled"]).length != 0) {
            bgColor = "red"
            title = "Filled"
        }
        eventsBody.push({
            id: uuid(),
            timezone: "local",
            title: title,
            extendedProps: {
                _id: slot["_id"],
                filled: slot["filled"]
            },
            background: bgColor,
            start: slot.actual_start,
            end: slot.actual_end,
            allDay: false
        })
    });
    return eventsBody;
};

const CalendarScheduler = ({events, setTimeslots, ...restProps}) => {
    const [calendarState, setCalendarState] = useState({
      weekendsVisible: true,
      currentEvents: []
    })
    const [apiEvents, setApiEvents] = useState({ 'calendarApi': [] })
    const [event, setEvent] = useState(reformatEvents(events));
    const calendarAPI = React.useRef(null);

    const resetCalendar = async() => {
      var calendarApi = apiEvents.calendarApi
      if (calendarApi) {
        if (calendarApi.length != 0) {
          calendarApi.getEvents().forEach(event => { 
            event.remove()
          });
          reformatEvents(events).map((event) => {
            calendarApi.addEvent(event)
          })
        }
      }
    }

    useEffect(() => {

      if (events != event) {
        resetCalendar().then(() => {
        })
      }

    }, [events])

    console.log(apiEvents)

    const handleDateSelect = (selectInfo) => {
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect()
      var copied = apiEvents 
      copied['calendarApi'] = calendarApi
      setApiEvents(copied)
      calendarApi.addEvent({
          id: uuid(),
          timezone: "local",
          backgroundColor: "pink",
          title: "",
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: false
      })
    }

    const reformatTimeslot = (data) => {
        var timeslotArr = []
        data.map((slot) => {
            timeslotArr.push({
                _id: slot._def.extendedProps._id ? slot._def.extendedProps._id : uuid(),
                day: new Date(moment(slot._instance.range.start).add(4, 'hours')).getDay(),
                actual_start: new Date(moment(slot._instance.range.start).add(4, 'hours')),
                actual_end:  new Date(moment(slot._instance.range.end).add(4, 'hours')),
                filled: slot._def.extendedProps.filled ? slot._def.extendedProps.filled : {},
                start: new Date(moment(slot._instance.range.start).add(4, 'hours')).toTimeString(),
                end:  new Date(moment(slot._instance.range.end).add(4, 'hours')).toTimeString(),
            })
        })
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
        <div>
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
            events={event}
            duration={30}
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
                    info.el.style.backgroundColor = 'green'
                    info.el.style.animation = ""
                    info.el.style.background = info.event.extendedProps.background;
                    info.el.style.backgroundSize = '100%';
                }
            }}
          />
        </div>
      </div>
    )
  }
  
export default CalendarScheduler



