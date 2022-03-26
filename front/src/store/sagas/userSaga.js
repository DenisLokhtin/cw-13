import {put, takeEvery} from "redux-saga/effects";
import {
    loginUser,
    loginUserRequest,
    logoutUser, logoutUserFailure, logoutUserSuccess,
    registerUser,
    registerUserFailure,
    registerUserSuccess
} from "../actions/usersAction";
import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";

export function* registerUserSaga({payload: userData}) {
    try {
        const response = yield axiosApi.post('/users', userData);
        yield put(registerUserSuccess(response.data));
        toast.success('Registered successful!');
    } catch (error) {
        toast.error(error.response.data.global);
        yield put(registerUserFailure(error.response.data));
    }
}

export function* loginUserSaga({payload: userData}) {
    try {
        const response = yield axiosApi.post('users/sessions', userData);
        yield put(loginUserRequest(response.data.user));
        toast.success('Login successful!');
    } catch (error) {
        toast.error(error.response.data);
    }
}

export function* logoutUserSaga() {
    try {
        axiosApi.delete('/users/sessions');
        yield put(logoutUserSuccess());
        toast.success('Logout successful!');
    } catch (error) {
        toast.error(error.response.data);
        yield put(logoutUserFailure(error.response.data));
    }
}

const usersSaga = [
    takeEvery(registerUser, registerUserSaga),
    takeEvery(loginUser, loginUserSaga),
    takeEvery(logoutUser, logoutUserSaga),
];

export default usersSaga;