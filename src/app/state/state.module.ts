import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer, appMetaReducers } from './app.reducer';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomSerializer } from './shared/utils';
import { ToastEffects } from './shared/toast-store/toast.effects';
import { ModalEffects } from './shared/modal-store/modal.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, {metaReducers: appMetaReducers}), /* Initialise the Central Store with Application's main reducer*/
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([   /* Start monitoring app's side effects */
      ToastEffects,
      ModalEffects
    ]),
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
