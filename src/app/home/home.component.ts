import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { Store } from '@ngrx/store';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';

// import * as fromApp from '../store/app.reducer';
// import * as HomeActions from './store/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  // calendarPlugins = [dayGridPlugin];

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    // { title: 'Event Now', start: new Date() }
  ];

  constructor(
    // private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
  }

  toggleVisible() { // use if want hide calendar
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {  // use if want hide weekends days from calendar
    this.calendarWeekends = !this.calendarWeekends;
  }

  // gotoPast() {
  //   let calendarApi = this.calendarComponent.getApi();
  //   calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  // }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }

}
