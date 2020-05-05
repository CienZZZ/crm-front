import { Injectable, NgZone } from '@angular/core';
import { ModalService } from '../../shared/modal/modal.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.interfaces';
import { isSpinnerShowing } from 'src/app/state/shared/loading-spinner-store';
import { HideSpinner } from 'src/app/state/shared/loading-spinner-store/loading-spinner.actions';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private zone: NgZone,
    private modalService: ModalService,
    private store: Store<AppState>
  ) { }

  showSuccess(message: string) {
    const title = 'Information';
    this.zone.run(() => {
      if (isSpinnerShowing) {
        this.store.dispatch(new HideSpinner());
      }
      this.modalService.open(title, message);
    });
  }

  showError(message: string) {
    const title = 'Error';
    this.zone.run(() => {
      if (isSpinnerShowing) {
        this.store.dispatch(new HideSpinner());
      }
      this.modalService.open(title, message);
    });
  }
}
