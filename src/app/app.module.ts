import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, DefaultRouterStateSerializer } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import {ROOT_REDUCERS} from './store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(ROOT_REDUCERS), /* Initialise the Central Store with Application's main reducer*/
    EffectsModule.forRoot([]), /* Start monitoring app's side effects */
    StoreDevtoolsModule.instrument({ logOnly: environment.production}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
