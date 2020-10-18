import {createStore} from "redux"
import { counterReducer } from "../reducer/reducer"

export const store = createStore(counterReducer)