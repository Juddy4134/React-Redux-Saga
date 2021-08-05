import { takeEvery,put, call } from "@redux-saga/core/effects";
import { hideLoader, showAllert, showLoader } from "./actions";
import { FETCH_POSTS, REQUEST_POST } from "./types";

export function* sagaWatcher(){
    yield takeEvery(REQUEST_POST,sagaWorker)
}

function* sagaWorker() {
    try{
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POSTS, payload})
        yield put(hideLoader())
    } catch (error){
        yield put(showAllert('Someting went wrong'))
        yield put(hideLoader())
    }
    
}

async function fetchPosts(){
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}