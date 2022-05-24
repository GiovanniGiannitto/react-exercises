import React from "react";

export function Sum(props) {
    const array = props.numbers;
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result += array[i]
    }

    return (
        <h1>{result}</h1>
    )
}