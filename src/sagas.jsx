import {put,takeEvery,all} from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));
function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* watcher() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }

  export default function* rootSaga() {
    yield all([
      watcher()
    ])
  }