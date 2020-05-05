import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ToastContainerComponent } from './toast/toast-container.component';
import { EffectsModule } from '@ngrx/effects';
import { ToastEffects } from './toast/store/toast.effects';
import { ModalContentComponent } from './modal/modal-content.component';
import { ModalEffects } from './modal/store/modal.effects';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ToastContainerComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgbModule,
    EffectsModule.forFeature([ToastEffects, ModalEffects])
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
