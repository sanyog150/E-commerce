
import { put, takeEvery } from 'redux-saga/effects'
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from '../Constants'
import { createRecord, getRecord, updateRecord, deleteRecord } from './Services'
// import { updateMultipartRecord } from './Services'
// import { createMultipartRecord } from './Services/index'

function* createSaga(action){ //worker saga
    let response = yield createRecord("brand",action.payload)
    yield put({type : CREATE_BRAND_RED, payload: response})

    // let response = yield createMultipartRecord("brand",action.payload)
    // yield put({type : CREATE_BRAND_RED, payload: response})
}

function* getSaga(){ //worker saga      
    let response = yield getRecord("brand")
    yield put({type : GET_BRAND_RED, payload: response})
}

function* updateSaga(action){//worker saga
    yield updateRecord("brand",action.payload)
    yield put({type : UPDATE_BRAND_RED, payload: action.payload})

    // let response = yield updateMultipartRecord("brand",action.payload)
    // yield put({type : UPDATE_BRAND_RED, payload: response})
}

function* deleteSaga(action){//worker saga
    yield deleteRecord("brand",action.payload)
    yield put({type : DELETE_BRAND_RED, payload: action.payload})
}

//call the saga and CREATE_BRAND and GET_BRAND then call the function... createSaga and getSaga
export default function* brandSagas(){
      yield takeEvery(CREATE_BRAND, createSaga)    //wathcer saga
      yield takeEvery(GET_BRAND, getSaga)          //wathcer saga
      yield takeEvery(UPDATE_BRAND, updateSaga)    //wathcer saga
      yield takeEvery(DELETE_BRAND, deleteSaga)    //wathcer saga
  }
  
  //watcher saga track which category/ function hit..