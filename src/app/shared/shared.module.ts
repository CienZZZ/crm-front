import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ToastContainerComponent } from './toast/toast-container.component';
import { ToastService } from './toast/toast.service';
import { EffectsModule } from '@ngrx/effects';
import { ToastEffects } from './toast/store/toast.effects';
// import { DropdownDirective } from './dropdown.directive';
// import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    // AlertComponent,
    LoadingSpinnerComponent,
    // DropdownDirective,
    // PlaceholderDirective
    ToastContainerComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    NgbModule,
    EffectsModule.forFeature([ToastEffects])
  ],
  exports: [
    // AlertComponent,
    LoadingSpinnerComponent,
    // DropdownDirective,
    CommonModule,
    FullCalendarModule,
    // PlaceholderDirective,
    NgbModule,
    ToastContainerComponent
  ],
  // entryComponents: [ToastContainerComponent],
  // providers: [ToastService]
})
export class SharedModule {}
