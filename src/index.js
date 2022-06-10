//import React from "react";
//import ReactDOM from "react-dom";
import "./index.css" 
import { incrementCounter } from "./state/CounterReducer";
// import { Root } from "./Root";
import { store } from "./state/Store"
import { addTodo } from "./state/TodosReducer";

// const root = document.getElementById("root")

// ReactDOM.render(<Root />, root)

store.subscribe(() => {console.log(store.getState())})

store.dispatch(incrementCounter(5))
store.dispatch(incrementCounter(2))

store.dispatch(addTodo({id: 1, title: "primo titolo", completed: true}))