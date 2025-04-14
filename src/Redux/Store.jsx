import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import RootSaga from "./Sagas/RootSaga";
import RootReducer from "./Reducers/RootReducer";

const Saga = createSagaMiddleware()

const store =  configureStore({
    reducer: RootReducer,
    middleware:()=>[Saga]
})

export default store
Saga.run(RootSaga)
