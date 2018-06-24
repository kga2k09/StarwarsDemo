// Watcher
export function* onPageInit() {
    yield takeLatest(LOAD_PLANET_DATA, fetchDataForPage);
  }

// Saga
export function* fetchDataForPage() {

}