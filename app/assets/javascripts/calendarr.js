$(document).ready(function() {
    $('#calendarr').fullCalendar({
        events: '/events.json',
        
        editable: true,
        disableDragging: true,

        dayClick: function(date, allDay, jsEvent, view) {
            $('#calendarr').fullCalendar('addEventSource', [{
                title: "Available",
                start: date,
                allDay: true
            }]);
         },
        eventClick: function(calEvent, jsEvent, view) {
            $('#calendarr').fullCalendar('removeEvents', calEvent._id);
        },
    });
});