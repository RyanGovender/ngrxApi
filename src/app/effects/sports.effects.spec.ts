import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SportsEffects } from './sports.effects';

describe('SportsEffects', () => {
  let actions$: Observable<any>;
  let effects: SportsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SportsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SportsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
