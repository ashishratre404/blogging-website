import './post.css';
import blogPostImg from '../images/blog.jpg';

export default function Post() {
    return (
        <div className='post'>
            <img className='postImg' src={blogPostImg} alt='' />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Tech</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>Learn Website Development</span>
                <hr />
                <span className='postDate'> 1 week ago </span>
            </div>
            <p className='postDesc'>
                Thinking to learn website Development? Then you are at right place. You can build your website
                with any tech stack like:- mern stack, mean stack, view, php, etc. What you have to do is.
                you have to just follow this simple steps that i am going to tell you. Join our Development team
                to get started.
            </p>
        </div>
    )
}
