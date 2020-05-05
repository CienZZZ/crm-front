import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ToastContainerComponent } from './toast/toast-container.component';
import { ModalContentComponent } from './modal/modal-content.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ToastContainerComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgbModule
  ],
  exports: [
    LoadingSpinnerComponent,
    CommonModule,
    FullCalendarModule,
    NgbModule,
    ToastContainerComponent
  ],
  entryComponents: [ModalContentComponent]
})
export class SharedModule {}
