import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/TodoFeature';
export const store = configureStore({
    reducer : todoReducer
})