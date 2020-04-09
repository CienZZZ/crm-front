import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  // { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule)},
  // { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  // { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)},
  // { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
