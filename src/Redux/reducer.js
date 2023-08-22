import {
  LOGIN_USERS_START,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_ERROR,
  CREATE_USERS_START,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_ERROR,
  DELETE_USERS_ERROR,
  DELETE_USERS_START,
  DELETE_USERS_SUCCESS,
  UPDATE_USERS_START,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_ERROR,
  // ====Imge Api
  UPLOAD_IMG_START,
  UPLOAD_IMG_SUCCESS,
  UPLOAD_IMG_ERROR,
  IMG_FILE_NAME_GET_START,
  IMG_FILE_NAME_DELETE_START,
  IMG_FILE_NAME_POST_START,
  IMG_FILE_NAME_UPDATE_START,
  IMG_FILE_NAME_GET_SUCCESS,
  IMG_FILE_NAME_POST_SUCCESS,
  IMG_FILE_NAME_DELETE_SUCCESS,
  IMG_FILE_NAME_UPDATE_SUCCESS,
  IMG_FILE_NAME_GET_ERROR,
  IMG_FILE_NAME_POST_ERROR,
  IMG_FILE_NAME_UPDATE_ERROR,
  IMG_FILE_NAME_DELETE_ERROR,
} from "./actiontTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
  uploadfile: [],
};

const usersReduce = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USERS_START:
    case CREATE_USERS_START:
    case DELETE_USERS_START:
    case UPDATE_USERS_START:
    case IMG_FILE_NAME_GET_START:
    case IMG_FILE_NAME_POST_START:
    case IMG_FILE_NAME_UPDATE_START:
    case IMG_FILE_NAME_DELETE_START:
      return {
        ...state,
        loading: true,
      };
    case IMG_FILE_NAME_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    case LOGIN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case IMG_FILE_NAME_POST_SUCCESS:
    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case IMG_FILE_NAME_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        images: state.images.filter((item) => item.id !== action.payload),
      };
    case IMG_FILE_NAME_UPDATE_SUCCESS:
    case UPDATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case IMG_FILE_NAME_GET_ERROR:
    case IMG_FILE_NAME_POST_ERROR:
    case IMG_FILE_NAME_UPDATE_ERROR:
    case IMG_FILE_NAME_DELETE_ERROR:
    case LOGIN_USERS_ERROR:
    case CREATE_USERS_ERROR:
    case DELETE_USERS_ERROR:
    case UPDATE_USERS_ERROR:
    case UPLOAD_IMG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // === node img Api==

    case UPLOAD_IMG_START:
      return {
        ...state,
        loading: true,
      };

    case UPLOAD_IMG_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReduce;
