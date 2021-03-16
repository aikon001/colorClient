import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export default createStore(rootReducer)

const store = configureStore({
    reducer: rootReducer
  })

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()