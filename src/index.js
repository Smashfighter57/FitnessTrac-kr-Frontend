import React, { useState, useEffect } from 'react';
import "./Main.css"
import ReactDOM from 'react-dom';
import { Routes, Route, Link, NavLink, BrowserRouter as Router, useNavigate, useParams } from 'react-router-dom';
import { 
    AccountForm, 
    Activities, 
    Header, 
    Home, 
    Routines, 
    Profile, 
    MyRoutines, 
    Login} from './components';

const Main = () => {
    const [token, setToken] = useState('')
const [currentUser, setCurrentUser] = useState('')
const [activities, setActivities] = useState([])
const [routines, setRoutines] = useState({})
const [accountPage, setAccountPage] = useState('login')
const [isLoggedIn, setIsLoggedIn] = useState(false)

useEffect(async () => {
    const savedToken = localStorage.getItem('token')
    if (savedToken){
        console.log("token exists")
        setToken(savedToken)
        setIsLoggedIn(true)
        const userData = await fetchUserData(savedToken)
        setCurrentUser(userData.data.guest)
    }
})

return<>
<div>Fitness Tracker</div>
    <Header />
        <hr/>
        <Routes>
            <Route path = '/' exact element ={
                <>
                <h1>Welcome to Fitness Tracker.</h1>
                <h3>Please make sure to sign in or register as a user first before using our website.</h3>
                </>
            }/>
            <Route path='/register' element={ <AccountForm setToken={setToken} action="register" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
            <Route path='/login' element={ <AccountForm setToken ={setToken} action="login" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
            <Route path ='/activities' element={<Activities token={token} setActivities={setActivities} activities={activities} />} />
            <Route path='/routines' element={<Routines token={token} setRoutines={setRoutines} routines={routines} />} />
            <Route path='/account/:action' element={ <AccountForm setToken={setToken} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} />} />
            <Route path='/profile' element={ <Profile isLoggedIn={isLoggedIn} currentUser={currentUser} /> }/>
            <Route path='/myRoutines' element={<MyRoutines token={token} MyRoutines={MyRoutines} />}/>
            <Route path={`/{accountPage}`} element={<>
            { accountPage === 'profile' ?
            <Profile /> : <AccountForm setToken={setToken} action="login" setAccountPage={setAccountPage} /> } 
            </>}/>
        </Routes>
</>
}

ReactDOM.render(
    <Router>
        <Main />
    </Router>,
    document.getElementById('app'),
);