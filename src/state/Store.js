import { combineReducers, createStore } from "redux";
import { CounterReducer} from "./CounterReducer";
import { TodosReducer } from "./TodosReducer";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    todo: TodosReducer
})

export const store = createStore(rootReducer)


