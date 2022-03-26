import resto from "../slices/resto";

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
} = resto.actions;