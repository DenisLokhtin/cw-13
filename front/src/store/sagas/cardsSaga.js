import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";
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
} from "../actions/cardsAction";

export function* cardsSagas({payload}) {
    let queryParams = '/cards';

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
    try {
        const response = yield axiosApi.get('/cards/' + payload);
        yield put(fetchOneCardsSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить карточу');
        yield put(fetchOneCardsFailure());
    }
}

export function* addCardsSaga({payload: newCards}) {
    try {
        yield axiosApi.post('/cards', newCards);
        yield put(addCardsSuccess());
        yield put(fetchCardsRequest());
        toast.success('Свежая карточка добавлена!');
    } catch (error) {
        yield put(addCardsFailure(error.response.data));
    }
}

function* deleteCardsSaga({payload: id}) {
    try {
        yield axiosApi.delete(`/cards/${id}`);
        yield put(deleteCardsSuccess(id));
        toast.success('Карточка удалена!');
    } catch (e) {
        yield put(deleteCardsFailure(e.response.data));
    }
}


const cardsSaga = [
    takeEvery(fetchCardsRequest, cardsSagas),
    takeEvery(addCardsRequest, addCardsSaga),
    takeEvery(fetchOneCardsRequest, oneCardsSaga),
    takeEvery(deleteCardsRequest, deleteCardsSaga),
];

export default cardsSaga;