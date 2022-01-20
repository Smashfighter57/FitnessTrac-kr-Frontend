import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import { fetchActivities } from '../util'

const Activities = () => {
    const [activities, setActivities] = useState([])

    useEffect(async () => {
        const activities = await fetchActivities();
        setActivities(activities);
    }, [])
    return <>
    <div>Welcome to the Activities Page.</div>
    { activities.map((activity) => {
        return <div key={activity.id}>
            <div>Name: {activity.name}</div>
            <div>Description: {activity.description}</div>
        </div>
    }) }
    </>
}
    
export default Activities;