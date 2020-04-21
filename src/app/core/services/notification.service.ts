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
    this.zone.run(() => {
      this.modalService.open(message);
    });
  }

  showError(message: string) {
    this.zone.run(() => {
      this.modalService.open(message);
    });
  }
}
