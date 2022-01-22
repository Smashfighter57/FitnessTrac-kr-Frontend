import React from 'react'
import { useState, useEffect } from 'react'
// import { fetchMyRoutines } from '../util'



const MyRoutines = () => {
    const [myRoutines, setMyRoutines] = useState([])

    useEffect(async() => {
        const myRoutines = await fetchMyRoutines();
        setMyRoutines(myRoutines);
    }, [])
    return <>
    <div>Welcome to your My Routines Page.</div>
    { myRoutines.map((myRoutine) => {
        return <div key={myRoutine.id}>
            <div>Name: {myRoutine.name}</div>
            <div>Description: {myRoutine.description}</div>
        </div>
    })}</>
}

export default MyRoutines;