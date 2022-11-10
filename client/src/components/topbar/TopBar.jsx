import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

import pofile from '.././images/profile.jpg'

export default function TopBar() {

    const user = true;

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/write' className='link'>Write</Link>
                    </li>
                    <li className='topListItem'>
                        {user && 'Logout'}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {user ?( 
                    <img className='topImg' src={pofile} alt='user' />
                    ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link to='/register' className='link'>Register</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to='/login' className='link'>Login</Link>
                        </li>
                    </ul>
                    )}
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
