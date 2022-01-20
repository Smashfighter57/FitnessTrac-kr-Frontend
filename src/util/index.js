const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/'

export const fetchActivities = async () => {
    try {
         const response = await fetch(`${BASE_URL}/activities`, {
             headers: {
                 'Content-Type': 'application/json', 
             },
         })
         const result = await response.json()
         return result;   
    }catch (error) {
        console.log(error)
    }
}

export const fetchRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

export const fetchUserData = async (token) => {
    try {
        const user_data_headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/guests/me', {
            headers: user_data_headers  
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

export const AddRoutines = async (token, routine) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post:routine
            })
        })
        const result = await response.json
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const addActivities = async (token, activity) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            method: "POST",
            header: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: activity
                }
            })
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

export const deleteActivities = async (token, activity) => {
    try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

export const deleteRoutines = async(token, routine) => {
    try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json()
        console.log(result) 
    } catch(error) {
        console.log(error)
    }
}

