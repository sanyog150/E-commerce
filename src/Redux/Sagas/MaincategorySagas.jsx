
import { put, takeEvery } from 'redux-saga/effects'
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED } from '../Constants'
import { createRecord, getRecord, updateRecord, deleteRecord } from './Services'
// import { updateMultipartRecord } from './Services'
// import { createMultipartRecord } from './Services/index'

function* createSaga(action){ //worker saga
    let response = yield createRecord("maincategory",action.payload)
    yield put({type : CREATE_MAINCATEGORY_RED, payload: response})

    // let response = yield createMultipartRecord("maincategory",action.payload)
    // yield put({type : CREATE_MAINCATEGORY_RED, payload: response})
}

function* getSaga(){ //worker saga      
    let response = yield getRecord("maincategory")
    yield put({type : GET_MAINCATEGORY_RED, payload: response})
}

function* updateSaga(action){//worker saga
    yield updateRecord("maincategory",action.payload)
    yield put({type : UPDATE_MAINCATEGORY_RED, payload: action.payload})

    // let response = yield updateMultipartRecord("maincategory",action.payload)
    // yield put({type : UPDATE_MAINCATEGORY_RED, payload: response})
}

function* deleteSaga(action){//worker saga
    yield deleteRecord("maincategory",action.payload)
    yield put({type : DELETE_MAINCATEGORY_RED, payload: action.payload})
}

//call the saga and CREATE_MAINCATEGORY and GET_MAINCATEGORY then call the function... createSaga and getSaga
export default function* maincategorySagas(){
      yield takeEvery(CREATE_MAINCATEGORY, createSaga)    //wathcer saga
      yield takeEvery(GET_MAINCATEGORY, getSaga)          //wathcer saga
      yield takeEvery(UPDATE_MAINCATEGORY, updateSaga)    //wathcer saga
      yield takeEvery(DELETE_MAINCATEGORY, deleteSaga)    //wathcer saga
  }
  
  //watcher saga track which category/ function hit..