
import { put, takeEvery } from 'redux-saga/effects'
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from '../Constants'
import { createRecord, getRecord, updateRecord, deleteRecord } from './Services'
// import { updateMultipartRecord } from './Services'
// import { createMultipartRecord } from './Services/index'

function* createSaga(action){ //worker saga
    let response = yield createRecord("product",action.payload)
    yield put({type : CREATE_PRODUCT_RED, payload: response})

    // let response = yield createMultipartRecord("product",action.payload)
    // yield put({type : CREATE_PRODUCT_RED, payload: response})
}

function* getSaga(){ //worker saga      
    let response = yield getRecord("product")
    yield put({type : GET_PRODUCT_RED, payload: response})
}

function* updateSaga(action){//worker saga
    yield updateRecord("product",action.payload)
    yield put({type : UPDATE_PRODUCT_RED, payload: action.payload})

    // let response = yield updateMultipartRecord("product",action.payload)
    // yield put({type : UPDATE_PRODUCT_RED, payload: response})
}

function* deleteSaga(action){//worker saga
    yield deleteRecord("product",action.payload)
    yield put({type : DELETE_PRODUCT_RED, payload: action.payload})
}

//call the saga and CREATE_PRODUCT and GET_PRODUCT then call the function... createSaga and getSaga
export default function* productSagas(){
      yield takeEvery(CREATE_PRODUCT, createSaga)    //wathcer saga
      yield takeEvery(GET_PRODUCT, getSaga)          //wathcer saga
      yield takeEvery(UPDATE_PRODUCT, updateSaga)    //wathcer saga
      yield takeEvery(DELETE_PRODUCT, deleteSaga)    //wathcer saga
  }
  
  //watcher saga track which category/ function hit..