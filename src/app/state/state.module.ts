import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer, appMetaReducers } from './app.reducer';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomSerializer } from './shared/utils';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, {metaReducers: appMetaReducers}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class StateModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomSerializer
        }
      ]
    };
  }
}
