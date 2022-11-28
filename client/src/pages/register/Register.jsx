import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
        const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,email,password
    })
    res.data && window.location.replace("/login");
    } catch (error) {
        setError(true);
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="Password"
          placeholder="Enter your password..."
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerBtn"  type="submit">Register</button>
      </form>
      <button className="registerLoginBtn">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && <span style={{color:'tomato', marginTop: '10px'}}>Something went wrong!</span>}
    </div>
  );
}
