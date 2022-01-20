import React from 'react'
import { fetchRoutines } from '../util'

const Routines = () => {
    const [routines, setRoutines] = useState([])

    useEffect(async () => {
        const routines = await fetchRoutines();
        setRoutines(routines);
    }, [])
    return <>
    <div>Welcome to the Routines Page.</div>
    { routines.map((routines) => {
        return <div key={routine.id}>
            <div>Name: {routine.id}</div>
            <div>Description: {routine.description}</div>
        </div>
    }) }
    </> 
}

export default Routines;