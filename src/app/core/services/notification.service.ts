import { Injectable, NgZone } from '@angular/core';
import { ModalService } from './modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private zone: NgZone,
    private modalService: ModalService
  ) { }

  showSuccess(message: string) {
    const title = 'Information';
    this.zone.run(() => {
      this.modalService.open(title, message);
    });
  }

  showError(message: string) {
    const title = 'Error';
    this.zone.run(() => {
      this.modalService.open(title, message);
    });
  }
}
