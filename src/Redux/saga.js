import * as types from "./actiontTypes";
import {
  loginUsersError,
  loginUsersSuccess,
  createUsersSuccess,
  createUsersError,
  deleteUsersSuccess,
  deleteUsersError,
  updateUsersError,
  // ===== node image start
  uploadimgSuccess,
  uploadimgError,
  // ===== node image end
  imageFileNameGetSuccess,
  imageFileNameGetError,
  ImageFileNamePostSuccess,
  ImageFileNamePostError,
  ImageFileNameUpdateError,
  ImageFileNameDeletSuccess,
  ImageFileNameDeletError,
} from "../Redux/actions";
import {
  loginUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
  createimgApi,
  startImgFileNameGetApi,
  createImgFileNameApi,
  updatImagDetaileApi,
  deleteImgFileNameApi,
} from "./api";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "@redux-saga/core/effects";

function* onLoginUsersStartAsync() {
  try {
    const response = yield call(loginUsersApi);

    if (response.status === 200) {
      yield put(loginUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loginUsersError(error.response.data));
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);

    if (response.status === 200) {
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUsersError(error.response.data));
  }
}

function* onDeletUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);

    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUsersSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUsersError(error.response.data));
  }
}

function* onUpdateUserStartAsync({ payload: { id, data } }) {
  try {
    const response = yield call(updateUserApi, id, data);
  } catch (error) {
    yield put(updateUsersError(error.response.data));
  }
}

// ======node image

function* onCreateImgStartAsync({ payload }) {
  try {
    const response = yield call(createimgApi, payload);

    if (response.status === 200) {
      yield put(uploadimgSuccess(response.data));
    }
  } catch (error) {
    yield put(uploadimgError(error.response.data));
  }
}

// =======img api================================================================================

function* onImageFileNameGetStartAsync() {
  try {
    const response = yield call(startImgFileNameGetApi);
    if (response.status === 200) {
      yield put(imageFileNameGetSuccess(response.data));
    }
  } catch (error) {
    yield put(imageFileNameGetError(error.response.data));
  }
}

function* onImageFileNamePostStartAsync({ payload }) {
  try {
    const response = yield call(createImgFileNameApi, payload);

    if (response.status === 200) {
      yield put(ImageFileNamePostSuccess(response.data));
    }
  } catch (error) {
    yield put(ImageFileNamePostError(error.response.data));
  }
}

function* onImageFileNameUpdateStartAsync({ payload: { id, data } }) {
  try {
    const response = yield call(updatImagDetaileApi, id, data);
  } catch (error) {
    yield put(ImageFileNameUpdateError(error.response.data));
  }
}

function* onImageFileNameDeletStartAsync(formDataFileId) {
  try {
    const response = yield call(deleteImgFileNameApi, formDataFileId);

    if (response.status === 200) {
      yield delay(500);
      yield put(ImageFileNameDeletSuccess(formDataFileId));
    }
  } catch (error) {
    yield put(ImageFileNameDeletError(error.response.data));
  }
}

// =======img api==================================================================================

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

function* onLoginUsers() {
  yield takeEvery(types.LOGIN_USERS_START, onLoginUsersStartAsync);
}

function* onCreateUser() {
  yield takeLatest(types.CREATE_USERS_START, onCreateUserStartAsync);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USERS_START);
    yield call(onDeletUserStartAsync, userId);
  }
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USERS_START, onUpdateUserStartAsync);
}

// ======>node img
function* onCreateImg() {
  yield takeLatest(types.UPLOAD_IMG_START, onCreateImgStartAsync);
}

// =======img api=====// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

function* onGetImgNameFile() {
  yield takeEvery(types.IMG_FILE_NAME_GET_START, onImageFileNameGetStartAsync);
}

function* onPostImgNameFile() {
  yield takeLatest(
    types.IMG_FILE_NAME_POST_START,
    onImageFileNamePostStartAsync
  );
}
function* onUpdateImgNameFile() {
  yield takeLatest(
    types.IMG_FILE_NAME_UPDATE_START,
    onImageFileNameUpdateStartAsync
  );
}

function* onDeleteImgNameFile() {
  while (true) {
    const { payload: formDataFileId } = yield take(
      types.IMG_FILE_NAME_DELETE_START
    );
    yield call(onImageFileNameDeletStartAsync, formDataFileId);
  }
}

// =======img api=====

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

const userSagas = [
  fork(onLoginUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
  fork(onCreateImg),
  fork(onGetImgNameFile),
  fork(onPostImgNameFile),
  fork(onUpdateImgNameFile),
  fork(onDeleteImgNameFile),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
