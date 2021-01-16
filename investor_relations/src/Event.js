import React, { Component } from 'react';
import events from "./event.json";
const getEventInfo = events.d.results;
const items = [];
var take5 = getEventInfo.length;
take5 = 5;
for (var i = 0; i < take5; i++)
{
    items.push(<li key={events.d.results[i].EventKey}>
        <a className="events-link" href={events.d.results[i]}>{events.d.results[i].CompanyCalendarTitle}</a>
    </li>)
}
class Event extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="title">Events</h2>
                <ul className="events-ul">
                    {items}
            	</ul>
            </React.Fragment>
        );
    }
}
export default Event;