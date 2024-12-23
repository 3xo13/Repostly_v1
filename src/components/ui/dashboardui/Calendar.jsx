"use client"
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
const Calendar = () => {
  return (
    <FullCalendar
  
    
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    headerToolbar={{
      start: 'today prev,next',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay',
    }}
    height={ '90vh'}
    events={[
        { title: 'product 1', date: '2024-12-10' },
        { title: 'product 2', date: '2024-12-13' }
      ]}
    
  />
  )
}

export default Calendar