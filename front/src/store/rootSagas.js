import {all} from 'redux-saga/effects';
import registerUserSaga from "./sagas/userSaga";
import restoSaga from "./sagas/restoSaga";

export function* rootSagas() {
    yield all([
        ...registerUserSaga,
        ...restoSaga,
    ])
}