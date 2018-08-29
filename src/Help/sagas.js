import { call, put, takeLatest } from 'redux-saga/effects'
import {SEARCH_API_ERROR, SEARCH_API_REQUEST, SEARCH_API_SUCCESS} from './actions';
import axios from 'axios';

export function searchSkyHelp(query) {
    return axios.get('https://help-search-api-prod.herokuapp.com/search?query=' + query);
};

function* searchHelp(action) {
    try {
        const response = yield call(searchSkyHelp, action.query);
        yield put({type: SEARCH_API_SUCCESS,  response});
    } catch (e) {
        yield put({type: SEARCH_API_ERROR, message: e.message});
    }
}


function* helpSaga() {
    yield takeLatest(SEARCH_API_REQUEST, searchHelp);
}

export default helpSaga;