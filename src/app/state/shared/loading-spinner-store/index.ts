import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromSpinner from './loading-spinner.reducer';

export const selectSpinnerEntity = createFeatureSelector<fromSpinner.State>(
  'spinner'
);
export const isSpinnerShowing = createSelector(
  selectSpinnerEntity,
  fromSpinner.isShowing
);
