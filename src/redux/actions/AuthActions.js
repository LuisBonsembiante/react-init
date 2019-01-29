import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, PASSWORD_CHANGED} from "./types";
import history from '../../components/commons/history';

export const emailChanged = (text) => {

    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {

    return {
        type: PASSWORD_CHANGED,
        payload: text

    };
};


export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        loginUserSucces(dispatch, {})

    };
};

export const logoutUser = (dispatch, user) => {

    dispatch({
        type: LOGOUT_USER,
        payload: user
    });
};

const loginUserSucces = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    history.push('/home');
    //localStorage.setItem('user', JSON.stringify(user));
};


