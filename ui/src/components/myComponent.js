import React, { useEffect, useState, useMemo, useCallback } from "react";


const MyComponent = () => {
    let arr = [101, 1200, 320, 44031]



    const reverse = (ar) => {
        return ar.map(e => {
            return Number(e.toString().split("").reverse().join("").replace(/0/g, ""))
        })
    }

    useEffect(() => {
        console.log(reverse(arr))
    }, [])

    return (
        <div>
            <h1>{arr}</h1>
            <h1>{reverse}</h1>
        </div>
    )

}



export default (MyComponent)