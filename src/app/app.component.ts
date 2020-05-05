import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from './state/app.interfaces';
import { isSpinnerShowing } from './state/shared/loading-spinner-store';
import { ShowSpinner, HideSpinner } from './state/shared/loading-spinner-store/loading-spinner.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'CRM-front';

  loading: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.router.events.subscribe((event: Event) => {
          switch (true) {
            case event instanceof NavigationStart: {
              this.store.dispatch(new ShowSpinner());
              break;
            }

            case event instanceof NavigationEnd:
            case event instanceof NavigationCancel:
            case event instanceof NavigationError: {
              this.store.dispatch(new HideSpinner());
              break;
            }
            default: {
              break;
            }
          }
        });
  }

  ngOnInit() {
    this.loading = this.store.pipe(select(isSpinnerShowing));
  }

}
