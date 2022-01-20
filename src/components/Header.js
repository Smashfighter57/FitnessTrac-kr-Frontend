import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Fitness Tracker</h1>
        <nav class="main_nav">
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/Routines'>Routines</Link></li>
                <li><Link to='/MyRoutines'>My Routines</Link></li>
                <li><Link to='/Activities'>Activities</Link></li>
                <li><Link to='/Login'>Login</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header