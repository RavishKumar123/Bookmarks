import { Actions } from '../actions/index';

interface DataResponse {
  bookmarks: any[];
}
export function loadData() {
  return async dispatch => {
    // Trigger the LOAD_DATA_BEGIN action
    dispatch(loadDataBegin());
    try {
      let response = await fetch('https://614dc798e3cf1f001712d331.mockapi.io/bookmarks');
      handleErrors(response);

      let json: DataResponse = await response.json();
      console.log('Response', json);
      // const sortedData = json.sort((a, b) => a.createdAt - b.createdAt)
      // Trigger the LOAD_DATA_SUCCESS action
      dispatch(loadDataSuccess(json));
      return json;
    } catch (error) {
      // Trigger the LOAD_DATA_FAILURE action
      dispatch(loadDataFailure(error));
    }
  };
}

export function deleteData(id) {
  return async dispatch => {
    // Trigger the LOAD_DATA_BEGIN action
    dispatch(deleteDataBegin());
    try {
      let response = await fetch(`https://614dc798e3cf1f001712d331.mockapi.io/bookmarks/${id}`, { method: 'DELETE' });
      handleErrors(response);

      let json: DataResponse = await response.json();
      console.log('Response', json);

      // Trigger the LOAD_DATA_SUCCESS action
      dispatch(deleteDataSuccess(json));
      return json;
    } catch (error) {
      // Trigger the LOAD_DATA_FAILURE action
      dispatch(deleteDataFailure(error));
    }
  };
}

export function addData(body) {
  return async dispatch => {
    console.log('Data added', body);

    // Trigger the ADD_DATA_BEGIN action
    dispatch(addDataBegin());
    try {
      let response = await fetch('https://614dc798e3cf1f001712d331.mockapi.io/bookmarks', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      handleErrors(response);

      let json: DataResponse = await response.json();
      console.log('Response', json);

      // Trigger the ADD_DATA_SUCCESS action
      dispatch(addDataSuccess(json));
      return json;
    } catch (error) {
      // Trigger the ADD_DATA_FAILURE action
      dispatch(addDataFailure(error));
    }
  };
}
function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
// ACTIONS

export interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
}
export const loadDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_BEGIN,
  });
};
export interface LoadDataSuccessAction {
  type: Actions.LOAD_DATA_SUCCESS;
  payload: any;
}
export const loadDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_SUCCESS,
    payload: { data },
  });
};
export interface LoadDataFailureAction {
  type: Actions.LOAD_DATA_FAILURE;
  payload: any;
}
export const loadDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_FAILURE,
    payload: { error },
  });
};

export interface AddDataBeginAction {
  type: Actions.ADD_DATA_BEGIN;
}
export const addDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.ADD_DATA_BEGIN,
  });
};

export interface AddDataSuccessAction {
  type: Actions.ADD_DATA_SUCCESS;
  payload: any;
}
export const addDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.ADD_DATA_SUCCESS,
    payload: { data },
  });
};

export interface AddDataFailureAction {
  type: Actions.ADD_DATA_FAILURE;
  payload: any;
}
export const addDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.ADD_DATA_FAILURE,
    payload: { error },
  });
};

// Delete Data Actions start
export interface DeleteDataBeginAction {
  type: Actions.DELETE_DATA_BEGIN;
}
export const deleteDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.DELETE_DATA_BEGIN,
  });
};

export interface DeleteDataSuccessAction {
  type: Actions.DELETE_DATA_SUCCESS;
  payload: any;
}

export const deleteDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.DELETE_DATA_SUCCESS,
    payload: { data },
  });
};

export interface DeleteDataFailureAction {
  type: Actions.DELETE_DATA_FAILURE;
  payload: any;
}
export const deleteDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.DELETE_DATA_FAILURE,
    payload: { error },
  });
};
