import { createStore } from "redux";
import { CounterReducer, incrementCounter } from "./CounterReducer";

export const store = createStore(CounterReducer)

store.dispatch(incrementCounter(1))
store.dispatch(incrementCounter(2))

store.subscribe(() => {console.log(store.getState())})

