import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            };
        case CLEAR_FORM_DATA:
            return {
                ...state,
                formData: initialState.formData, // Vuelve al estado inicial
            };
        default:
            return state;
    }
};

export default formReducer;
