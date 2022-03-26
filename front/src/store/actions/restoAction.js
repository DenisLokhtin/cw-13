import restoSlice from "../slices/restoSlice";

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
    deleteCardsRequest,
    deleteCardsSuccess,
    deleteCardsFailure,
} = restoSlice.actions;