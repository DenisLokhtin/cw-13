import {all} from 'redux-saga/effects';
import registerUserSaga from "./sagas/userSaga";

export function* rootSagas() {
    yield all([
        ...registerUserSaga
    ])
}