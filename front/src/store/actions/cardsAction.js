import cardsSlice from "../slices/cardsSlice";

export const {
    fetchCardsRequest,
    fetchCardsSuccess,
    fetchCardsFailure,
    addCardsRequest,
    addCardsSuccess,
    addCardsFailure,
    fetchOneCardsRequest,
    fetchOneCardsSuccess,
    fetchOneCardsFailure,
    changeCardsRequest,
    changeCardsSuccess,
    changeCardsFailure,
    deleteCardsRequest,
    deleteCardsSuccess,
    deleteCardsFailure,
    clearCardsErrors,
} = cardsSlice.actions;