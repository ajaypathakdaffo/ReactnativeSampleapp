import {put, takeLatest, all} from 'redux-saga/effects';
import ActionType from '../constants';

function* incrementCount(currentnumber) {
  yield put({
    type: ActionType.SUCCESS,
    payload: currentnumber.payload + 1,
  });
}

export default function* mySaga() {
  yield all([takeLatest(ActionType.INCREMENT, incrementCount)]);
}
