import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <div className='register'>
            <span className='registerTitle'>
                Register
            </span>
            <form className='registerForm'>
                <label>Username</label>
                <input className='registerInput' type='text' placeholder='Enter your username...' />
                <label>Email</label>
                <input className='registerInput' type='email' placeholder='Enter your email...' />
                <label>Password</label>
                <input className='registerInput' type='Password' placeholder='Enter your password...' />
                <label>Confirm Password</label>
                <input className='registerInput' type='Password' placeholder='Confirm your password...' />
                <button className='registerBtn'>Register</button>
            </form>
            <button className='registerLoginBtn'>
                <Link to='/login'className='link'>Login</Link>
            </button>
        </div>
    )
}

