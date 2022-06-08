import React from "react";

export function Sum({numbers = [1,2,3,4,5,6,7,8,9]}) {
    const array = numbers;
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result += array[i]
    }

    return (
        <h1>{result}</h1>
    )
}