// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// import { Company } from '../model/company.model';
// import { CompanyEventTypes } from '../model/company.events';
// import { environment } from '../../../environments/environment';

// @Injectable()
// export class CompaniesSocketService extends Socket {

//   liveCreated$ = this.fromEvent<Company>(CompanyEventTypes.LIVE_CREATED);
//   liveUpdated$ = this.fromEvent<Company>(CompanyEventTypes.LIVE_UPDATED);
//   liveDeleted$ = this.fromEvent<Company>(CompanyEventTypes.LIVE_DELETED);

//   constructor() {
//     super({
//       url: `${environment.socketConfig.url}/company`,
//       options: environment.socketConfig.opts
//     });
//   }
// }    // TODO: sockety wylaczone
