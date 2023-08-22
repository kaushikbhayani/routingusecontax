import {
  LOGIN_USERS_START,
  LOGIN_USERS_SUCCESS,
  LOGIN_USERS_ERROR,
  CREATE_USERS_START,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_ERROR,
  DELETE_USERS_START,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_ERROR,
  UPDATE_USERS_START,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_ERROR,
  // ====Imge Api
  IMG_USERS_START,
  IMG_USERS_SUCCESS,
  IMG_USERS_ERROR,
  UPLOAD_IMG_START,
  UPLOAD_IMG_SUCCESS,
  UPLOAD_IMG_ERROR,
  DELETE_IMG_START,
  DELETE_IMG_SUCCESS,
  DELETE_IMG_ERROR,
  IMG_FILE_NAME_GET_START,
  IMG_FILE_NAME_GET_SUCCESS,
  IMG_FILE_NAME_GET_ERROR,
  IMG_FILE_NAME_DELETE_START,
  IMG_FILE_NAME_DELETE_SUCCESS,
  IMG_FILE_NAME_DELETE_ERROR,
  IMG_FILE_NAME_UPDATE_START,
  IMG_FILE_NAME_UPDATE_SUCCESS,
  IMG_FILE_NAME_UPDATE_ERROR,
  IMG_FILE_NAME_POST_START,
  IMG_FILE_NAME_POST_SUCCESS,
  IMG_FILE_NAME_POST_ERROR,
} from "./actiontTypes";

// ============================================ACTION START===========================================
export const loginUsersStart = () => ({
  type: LOGIN_USERS_START,
});

export const loginUsersSuccess = (users) => ({
  type: LOGIN_USERS_SUCCESS,
  payload: users,
});

export const loginUsersError = (error) => ({
  type: LOGIN_USERS_ERROR,
  payload: error,
});
// ============================================ACTION END================================================

export const createUserStart = (user) => ({
  type: CREATE_USERS_START,
  payload: user,
});

export const createUsersSuccess = () => ({
  type: CREATE_USERS_SUCCESS,
});

export const createUsersError = (error) => ({
  type: CREATE_USERS_ERROR,
  payload: error,
});

// ============================================ACTION END==================================================

export const deleteUserStart = (userId) => ({
  type: DELETE_USERS_START,
  payload: userId,
});

export const deleteUsersSuccess = (userId) => ({
  type: DELETE_USERS_SUCCESS,
  payload: userId,
});

export const deleteUsersError = (error) => ({
  type: DELETE_USERS_ERROR,
  payload: error,
});

// ============================================ACTION END=================================================

export const updateUserStart = (userInfo) => ({
  type: UPDATE_USERS_START,
  payload: userInfo,
});

export const updateUsersSuccess = () => ({
  type: UPDATE_USERS_SUCCESS,
});

export const updateUsersError = (error) => ({
  type: UPDATE_USERS_ERROR,
  payload: error,
});

// ============================================ACTION END===================================================
// ===== node image
export const uploadimgStart = (formData) => ({
  type: UPLOAD_IMG_START,
  payload: formData,
});

export const uploadimgSuccess = () => ({
  type: UPLOAD_IMG_SUCCESS,
});

export const uploadimgError = (error) => ({
  type: UPLOAD_IMG_ERROR,
  payload: error,
});

// ============================================ SECOND ACTION START===================================================
// ============================================ACTION END===================================================
export const imageFileNameGetStart = () => ({
  type: IMG_FILE_NAME_GET_START,
});

export const imageFileNameGetSuccess = (formDataFileName) => ({
  type: IMG_FILE_NAME_GET_SUCCESS,
  payload: formDataFileName,
});

export const imageFileNameGetError = (error) => ({
  type: IMG_FILE_NAME_GET_ERROR,
  payload: error,
});


// ============================================ACTION END===================================================

export const ImageFileNamePostStart = (images) => ({
  type: IMG_FILE_NAME_POST_START,
  payload: images,
});

export const ImageFileNamePostSuccess = () => ({
  type: IMG_FILE_NAME_POST_SUCCESS,
});

export const ImageFileNamePostError = (error) => ({
  type: IMG_FILE_NAME_POST_ERROR,
  payload: error,
});

// ============================================ACTION END===================================================

export const ImageFileNameUpdateStart = (formDataFileNameUpdate) => ({
  type: IMG_FILE_NAME_UPDATE_START,
  payload: formDataFileNameUpdate,
});

export const ImageFileNameUpdateSuccess = () => ({
  type: IMG_FILE_NAME_UPDATE_SUCCESS,
});

export const ImageFileNameUpdateError = (error) => ({
  type: IMG_FILE_NAME_UPDATE_ERROR,
  payload: error,
});

// ============================================ACTION END===================================================

export const ImageFileNameDeletStart = (formDataFileDeletId) => ({
  type: IMG_FILE_NAME_DELETE_START,
  payload: formDataFileDeletId,
});

export const ImageFileNameDeletSuccess = (formDataFileDeletId) => ({
  type: IMG_FILE_NAME_DELETE_SUCCESS,
  payload: formDataFileDeletId,
});

export const ImageFileNameDeletError = (error) => ({
  type: IMG_FILE_NAME_DELETE_ERROR,
  payload: error,
});





// ============================================ SECOND ACTION START===================================================
