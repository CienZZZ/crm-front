import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { ModalOpen, MODAL_OPEN } from './modal.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ModalEffects {

  @Effect()
  modalOpen: Observable<any> = this.actions.pipe(
    ofType<ModalOpen>(MODAL_OPEN),
    map(action => action.payload),
    tap(payload => this.modalService.open(payload.title, payload.message))
  );

  constructor(
    private actions: Actions,
    private modalService: ModalService
  ) {}
}
