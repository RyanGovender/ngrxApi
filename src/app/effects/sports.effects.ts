import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of, EMPTY } from 'rxjs';
import { Sport } from '../Models/Sports';
import {ActionTypes} from '../actions/sports.actions';
import { SportsService } from '../services/sports.service';

@Injectable()
export class SportsEffects {

  constructor(private actions$: Actions, private sportService:SportsService) {}
  
  @Effect()
  loadSports$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(()=>
    this.sportService.getSports().pipe(
      map(sports=>{
        console.log(sports);
        return {type:ActionTypes.LoadSuccessful,payload:sports};
      }),
      catchError(()=> EMPTY)
    )
    )
  );
}
