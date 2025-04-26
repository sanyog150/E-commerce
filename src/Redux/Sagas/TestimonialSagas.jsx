
import { put, takeEvery } from 'redux-saga/effects'
import { CREATE_TESTIMONIAL, CREATE_TESTIMONIAL_RED, DELETE_TESTIMONIAL, DELETE_TESTIMONIAL_RED, GET_TESTIMONIAL, GET_TESTIMONIAL_RED, UPDATE_TESTIMONIAL, UPDATE_TESTIMONIAL_RED } from '../Constants'
import { createRecord, getRecord, updateRecord, deleteRecord } from './Services'
// import { updateMultipartRecord } from './Services'
// import { createMultipartRecord } from './Services/index'

function* createSaga(action){ //worker saga
    let response = yield createRecord("testimonial",action.payload)
    yield put({type : CREATE_TESTIMONIAL_RED, payload: response})

    // let response = yield createMultipartRecord("testimonial",action.payload)
    // yield put({type : CREATE_TESTIMONIAL_RED, payload: response})
}

function* getSaga(){ //worker saga      
    let response = yield getRecord("testimonial")
    yield put({type : GET_TESTIMONIAL_RED, payload: response})
}

function* updateSaga(action){//worker saga
    yield updateRecord("testimonial",action.payload)
    yield put({type : UPDATE_TESTIMONIAL_RED, payload: action.payload})

    // let response = yield updateMultipartRecord("testimonial",action.payload)
    // yield put({type : UPDATE_TESTIMONIAL_RED, payload: response})
}

function* deleteSaga(action){//worker saga
    yield deleteRecord("testimonial",action.payload)
    yield put({type : DELETE_TESTIMONIAL_RED, payload: action.payload})
}

//call the saga and CREATE_TESTIMONIAL and GET_TESTIMONIAL then call the function... createSaga and getSaga
export default function* testimonialSagas(){
      yield takeEvery(CREATE_TESTIMONIAL, createSaga)    //wathcer saga
      yield takeEvery(GET_TESTIMONIAL, getSaga)          //wathcer saga
      yield takeEvery(UPDATE_TESTIMONIAL, updateSaga)    //wathcer saga
      yield takeEvery(DELETE_TESTIMONIAL, deleteSaga)    //wathcer saga
  }
  
  //watcher saga track which category/ function hit..