import {
  LoadDataBeginAction,
  LoadDataSuccessAction,
  LoadDataFailureAction,
  AddDataBeginAction,
  AddDataSuccessAction,
  AddDataFailureAction,
  DeleteDataBeginAction,
  DeleteDataSuccessAction,
  DeleteDataFailureAction,
} from './data';
// Keep this type updated with each known action
export type ActionTypes =
  | LoadDataBeginAction
  | LoadDataSuccessAction
  | LoadDataFailureAction
  | AddDataBeginAction
  | AddDataSuccessAction
  | AddDataFailureAction
  | DeleteDataBeginAction
  | DeleteDataSuccessAction
  | DeleteDataFailureAction;

export enum Actions {
  LOAD_DATA_BEGIN = 'LOAD_DATA_BEGIN',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE',
  ADD_DATA_BEGIN = 'ADD_DATA_BEGIN',
  ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS',
  ADD_DATA_FAILURE = 'ADD_DATA_FAILURE',
  DELETE_DATA_BEGIN = 'DELETE_DATA_BEGIN',
  DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS',
  DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE',
}
