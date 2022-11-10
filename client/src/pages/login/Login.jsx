import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'>
                Login
            </span>
            <form className='loginForm'>
                <label>Email</label>
                <input className='loginInput' type='email' placeholder='Enter your email' />
                <label>Password</label>
                <input className='loginInput' type='Password' placeholder='Enter your password' />
                <button className='loginBtn'>Login</button>
            </form>
            <button className='loginResterBtn'>
                <Link to='/register'className='link'>Register</Link>
            </button>
        </div>
    )
}
