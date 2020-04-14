import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
// import { DropdownDirective } from './dropdown.directive';
// import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    // AlertComponent,
    LoadingSpinnerComponent,
    // DropdownDirective,
    // PlaceholderDirective
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgbModule
  ],
  exports: [
    // AlertComponent,
    LoadingSpinnerComponent,
    // DropdownDirective,
    CommonModule,
    FullCalendarModule,
    // PlaceholderDirective,
    NgbModule
  ]
})
export class SharedModule {}
