import {FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_FAILURE} from "../actions";

const initialState = {
    plants: [],
    isLoading: false,
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                plants: action.payload,
            };
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};