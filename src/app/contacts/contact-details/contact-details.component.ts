import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactStoreFacade } from '../store/contact.store-facade';
import { ContactEffects } from '../store/contact.effects';
import { map, switchMap, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

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

     this.redirectSub = this.contactsEffects.destroy$.pipe(
      filter( action =>
        action.id === +this.activatedRoute.snapshot.params.contactId
      )
    ).subscribe(_ => this.router.navigate(['/contacts']));

     this.activatedRoute.params.subscribe(params => {
      this.contactsFacade.loadContact(+params.contactId);
    });
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  deleteContact(contact: Contact) {
    const r = confirm('Are you sure?');
    if (r) {
      this.contactsFacade.deleteContact(contact.id);
      this.router.navigate(['/contacts']);
    }
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }
}
