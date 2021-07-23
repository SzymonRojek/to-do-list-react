import {
  takeEvery,
  takeLatest,
  call,
  put,
  select,
  delay,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  fetchExampleTasks,
  selectTasks,
  setTasks,
  setError,
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1_000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield put(setError());
    yield call(
      alert,
      "Sorry, can not get any data. Please check your internet connection."
    );
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* taskSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
