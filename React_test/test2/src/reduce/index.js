// redux toolkit에서 제공하는 Store를 만들어주는 함수
import { configureStore } from "@reduxjs/toolkit";
// Reducer를 결합하는 redux 제공 함수
import { combineReducers } from "redux";
// 만든 todos reducer

// Reducer들
const rootReducar = combineReducers({});

// 사용할 store
export const store = configureStore({
  reducer: rootReducar,
});
