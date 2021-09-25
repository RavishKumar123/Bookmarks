import { Actions, ActionTypes } from '../actions/index';
interface BookmarkState {
  bookmarks: any[];
  loading: boolean;
  error: any;
}
const getInitialState = () => {
  return {
    bookmarks: [],
    loading: false,
    error: null,
  };
};
const bookmarkReducer = (state: BookmarkState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case Actions.LOAD_DATA_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case Actions.LOAD_DATA_SUCCESS: {
      console.log('Payload', action.payload.data);

      return {
        ...state,
        loading: false,
        bookmarks: action.payload.data,
      };
    }
    case Actions.LOAD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case Actions.ADD_DATA_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case Actions.ADD_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        bookmarks: [{ ...action.payload.data }, ...state.bookmarks],
      };
    }
    case Actions.ADD_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case Actions.DELETE_DATA_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case Actions.DELETE_DATA_SUCCESS: {
      //   const tempBookmarks = [...state.bookmarks];
      //   const bookMarkIndex = tempBookmarks.findIndex(bm => bm.id === action.payload.data.id);
      //   const updatedBookmarks = tempBookmarks.splice(bookMarkIndex, 1);

      //   const tempBookmarks = [...state.bookmarks];
      //   const updatedBookmarks = tempBookmarks.filter(action.payload.data);
      return {
        ...state,
        loading: false,
        bookmarks: state.bookmarks.filter(item => action.payload.data.id !== item.id),
      };
    }
    case Actions.DELETE_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
export default bookmarkReducer;
