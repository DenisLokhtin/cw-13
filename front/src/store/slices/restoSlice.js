import {createSlice} from "@reduxjs/toolkit";

const name = 'cards';
const initialState = {
    cards: [],
    oneCard:{},
    singleLoading: false,
    fetchLoading: false,
    addLoading: false,
    addError: null,
};

const restoSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchCardsRequest(state) {
            state.fetchLoading = true;
        },
        fetchCardsSuccess(state, action) {
            state.cards = action.payload;
            state.fetchLoading = false;
        },
        fetchCardsFailure(state) {
            state.fetchLoading = false;
        },
        addCardsRequest(state){
            state.addLoading = true;
        },
        addCardsSuccess(state) {
            state.addLoading = false;
            state.addError = null;
        },
        addCardsFailure(state,action ){
            state.addLoading = false;
            state.addError = action.payload;
        },
        fetchOneCardsRequest(state) {
            state.singleLoading = true;
        },
        fetchOneCardsSuccess(state, action) {
            state.oneCard = action.payload;
            state.singleLoading = false;
        },
        fetchOneCardsFailure(state) {
            state.singleLoading = false;
        },
        clearCardsErrors(state) {
            state.addError = null;
        },
        deleteCardsRequest(state){
            state.deleteLoading = true;
        },
        deleteCardsSuccess(state, {payload: cardsId}) {
            state.deleteLoading = false;
            state.deleteError = null;
            state.cards = state.cards.filter(cards => cards._id !== cardsId);
        },
        deleteCardsFailure(state,action ){
            state.deleteLoading = false;
            state.deleteError = action.payload;
        },
    }
});

export default restoSlice;