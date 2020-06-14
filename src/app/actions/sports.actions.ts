import { createAction, props,Action } from '@ngrx/store';

interface Sport{
  sportId:Number;
  sportName:string;
  logo:string;
}

export enum ActionTypes{
 LoadItems = '[Sport] Load items for server',
 LoadSuccessful = '[Sport] Items loaded successfully',
 Add ='[Sport] Sport Added'
};

export class Add implements Action{

  readonly type = ActionTypes.Add;
  constructor(public payload:Sport){}
}

export class GetItems implements Action{
  readonly type = ActionTypes.LoadItems;
}

export class LoadItems implements Action{
  readonly type = ActionTypes.LoadSuccessful;
  constructor(public payload:Sport[]){}
}

export type ActionUnion = Add | GetItems | LoadItems;



