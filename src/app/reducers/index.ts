import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Sport } from '../Models/Sports';
import * as SportsAction from '../actions/sports.actions';


export const initialState = {
   items:[]
};

export function SportReducer(state = initialState,action:SportsAction.ActionUnion){
  switch(action.type)
  {
    case SportsAction.ActionTypes.LoadSuccessful:
      console.log(...action.payload);
      return{
        ...state,
        items:[...action.payload]
      };

      case SportsAction.ActionTypes.Add:
        return {
          ...state,
        }

        default:
          return state;
  }
}