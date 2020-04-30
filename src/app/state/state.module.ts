import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { appReducer, appMetaReducers } from './app.reducer';
import * as fromCompanies from './companies/company.reducer';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './companies/company.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomSerializer } from './shared/utils';
import { ToastEffects } from './toast/toast.effects';
import { AppEffects } from './app.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, {metaReducers: appMetaReducers}),
    StoreModule.forFeature('companies', fromCompanies.reducer),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AppEffects,
      CompanyEffects,
      ToastEffects
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
