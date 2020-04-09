import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomeComponent}]),
    SharedModule
  ]
})
export class HomeModule {

}
