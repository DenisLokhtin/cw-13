import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";
import History from '../../History';
import {
    addCardsFailure,
    addCardsRequest,
    addCardsSuccess,
    deleteCardsFailure,
    deleteCardsRequest,
    deleteCardsSuccess,
    fetchCardsFailure,
    fetchCardsRequest,
    fetchCardsSuccess,
    fetchOneCardsFailure,
    fetchOneCardsRequest,
    fetchOneCardsSuccess
} from "../actions/restoAction";

export function* cardsSagas({payload}) {
    let queryParams = '/resto';

    if (payload) {
        queryParams += payload;
    }

    try {
        const response = yield axiosApi.get(`${queryParams}`);
        yield put(fetchCardsSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить карточу');
        yield put(fetchCardsFailure());
    }
}

export function* oneCardsSaga({payload}) {
    console.log('v');
    try {
        const response = yield axiosApi.get('/resto/' + payload);
        yield put(fetchOneCardsSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить карточу');
        yield put(fetchOneCardsFailure());
    }
}

export function* addCardsSaga({payload: newCards}) {
    console.log('d');
    try {
        yield axiosApi.post('/resto', newCards);
        yield put(addCardsSuccess());
        yield put(fetchCardsRequest());
        History.push('/')
        toast.success('Свежая карточка добавлена!');
    } catch (error) {
        yield put(addCardsFailure(error.response.data));
    }
}

export function* deleteCardsSaga({payload: id}) {
    try {
        yield axiosApi.delete(`/resto/${id}`);
        yield put(deleteCardsSuccess(id));
        toast.success('Карточка удалена!');
    } catch (e) {
        yield put(deleteCardsFailure(e.response.data));
    }
}


const restoSaga = [
    takeEvery(fetchCardsRequest, cardsSagas),
    takeEvery(addCardsRequest, addCardsSaga),
    takeEvery(fetchOneCardsRequest, oneCardsSaga),
    takeEvery(deleteCardsRequest, deleteCardsSaga),
];

export default restoSaga;