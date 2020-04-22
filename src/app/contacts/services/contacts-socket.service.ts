import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';
import { Contact } from '../model/contact.model';
import { ContactEventTypes } from '../model/contact.events';

@Injectable()
export class ContactsSocketService extends Socket {

  liveCreated$ = this.fromEvent<Contact>(ContactEventTypes.LIVE_CREATED);
  liveUpdated$ = this.fromEvent<Contact>(ContactEventTypes.LIVE_UPDATED);
  liveDeleted$ = this.fromEvent<number>(ContactEventTypes.LIVE_DELETED);

  constructor() {
    super({
      url: `${environment.socketConfig.url}/contact`,
      options: environment.socketConfig.opts
    });
  }
}
