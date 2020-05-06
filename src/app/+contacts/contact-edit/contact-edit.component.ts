import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactStoreFacade } from '../store/contact.store-facade';
import { ContactEffects } from '../store/contact.effects';
import { map, switchMap, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactsFacade: ContactStoreFacade,
    private contactsEffects: ContactEffects
  ) {}

  contact$ = this.activatedRoute.params.pipe(
    map( params => params.contactId),
    switchMap(id => this.contactsFacade.getContactById(id))
  );

  redirectSub: Subscription;

  ngOnInit() {
    this.redirectSub = this.contactsEffects.update$.pipe(
      filter( action => action.contact.id === +this.activatedRoute.snapshot.params.contactId)
    ).subscribe(
      action => this.router.navigate(['/contacts', action.contact.id])
    );

    this.activatedRoute.params.subscribe(params => {
      this.contactsFacade.loadContact(+params.contactId);
    });
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(contact: Contact) {
    this.contactsFacade.updateContact(contact);
  }
}
