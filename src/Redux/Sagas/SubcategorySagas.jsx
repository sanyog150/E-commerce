
import { put, takeEvery } from 'redux-saga/effects'
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED } from '../Constants'
import { createRecord, getRecord, updateRecord, deleteRecord } from './Services'
// import { updateMultipartRecord } from './Services'
// import { createMultipartRecord } from './Services/index'

function* createSaga(action){ //worker saga
    let response = yield createRecord("subcategory",action.payload)
    yield put({type : CREATE_SUBCATEGORY_RED, payload: response})

    // let response = yield createMultipartRecord("subcategory",action.payload)
    // yield put({type : CREATE_SUBCATEGORY_RED, payload: response})
}

function* getSaga(){ //worker saga      
    let response = yield getRecord("subcategory")
    yield put({type : GET_SUBCATEGORY_RED, payload: response})
}

function* updateSaga(action){//worker saga
    yield updateRecord("subcategory",action.payload)
    yield put({type : UPDATE_SUBCATEGORY_RED, payload: action.payload})

    // let response = yield updateMultipartRecord("subcategory",action.payload)
    // yield put({type : UPDATE_SUBCATEGORY_RED, payload: response})
}

function* deleteSaga(action){//worker saga
    yield deleteRecord("subcategory",action.payload)
    yield put({type : DELETE_SUBCATEGORY_RED, payload: action.payload})
}

//call the saga and CREATE_SUBCATEGORY and GET_SUBCATEGORY then call the function... createSaga and getSaga
export default function* subcategorySagas(){
      yield takeEvery(CREATE_SUBCATEGORY, createSaga)    //wathcer saga
      yield takeEvery(GET_SUBCATEGORY, getSaga)          //wathcer saga
      yield takeEvery(UPDATE_SUBCATEGORY, updateSaga)    //wathcer saga
      yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)    //wathcer saga
  }
  
  //watcher saga track which category/ function hit..