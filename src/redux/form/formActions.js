import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

export const saveFormData = (data) => ({
    type: SET_FORM_DATA,
    payload: data,
});

export const clearFormData = () => ({
    type: CLEAR_FORM_DATA,
});

