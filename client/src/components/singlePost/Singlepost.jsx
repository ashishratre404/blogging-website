import './singlepost.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Singlepost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})
    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/"+path)
            setPost(res.data);
        }
        getPost();
    },[path])
    return (
        <div className='singlepost'>
            <div className='wrapper'>
            {post.photo && (<img src={post.photo} alt='' className='singlepostImg' />)}
                
                <h1 className='singlepostTitle'>{post.title}
                    <div className='editSection'>
                        <i className="singlepostIcon fab fa-facebook-square"></i>
                        <i className="singlepostIcon fab fa-twitter-square"></i>
                    </div>
                </h1>
                <div className='info'>
                    <span className='authorInfo'>Author: <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link> </span>
                    <span className='dateInfo'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='description'>
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
