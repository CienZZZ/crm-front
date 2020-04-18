import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

// import * as fromApp from '../store/app.reducer';
// import * as AuthActions from '../auth/store/auth.actions';
// import * as CompanyActions from '../companies/store/company.actions';
// import * as ContactsActions from '../contacts/store/contact.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = true;
  username = '';
  private userSub: Subscription;

  // constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    // this.userSub = this.store
    //   .select('auth')
    //   .pipe(map(authState => authState.user))
    //   .subscribe(user => {
    //     this.isAuthenticated = !!user;
    //     // console.log(!user);
    //     // console.log(!!user);
    //     if (user != null) {
    //       this.username = user.email;
    //     }
    //   });
  }

  onSaveData() {
    // this.store.dispatch(new CompanyActions.StoreCompanies());
    // this.store.dispatch(new ContactsActions.StoreContacts());
  }

  onFetchData() {
    // this.store.dispatch(new CompanyActions.FetchCompanies());
    // this.store.dispatch(new ContactsActions.FetchContacts());
  }

  onLogout() {
    // this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    // this.userSub.unsubscribe();
    // this.username = '';
  }
}


