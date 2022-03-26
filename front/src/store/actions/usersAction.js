import usersSlice from "../slices/usersSlice";

export const {
    registerUser,
    registerUserSuccess,
    registerUserFailure,
    logoutUser,
    logoutUserSuccess,
    logoutUserFailure,
    loginUser,
    loginUserRequest
} = usersSlice.actions;
