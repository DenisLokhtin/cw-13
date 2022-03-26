import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    user: null,
    registerLoading: false,
    registerError: null,
    loginError: null,
    loginLoading: false,
    error: null,
};

const name = 'users';

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        registerUser(state) {
            state.registerLoading = true;
        },
        registerUserSuccess(state, {payload: userData}) {
            state.user = userData;
            state.registerLoading = false;
            state.registerError = null;
        },
        registerUserFailure(state, action) {
            state.registerLoading = false;
            state.registerError = action.payload;
        },
        logoutUser(state) {
            state.user = null;
        },
        logoutUserSuccess(state) {
            state.error = null;
        },
        logoutUserFailure(state, action) {
            state.error = action.payload;
        },
        loginUser(state, action) {
        },
        loginUserRequest(state, {payload: userData}) {
            state.user = userData
        }
    }
});

export default usersSlice;