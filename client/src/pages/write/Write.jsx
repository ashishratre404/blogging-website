import './write.css';
import blogImg from '../../components/images/header.jpeg';

export default function Write() {
    return (
        <div className='write'>
            <img className='blogImg' src={blogImg} alt='' />
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput' className='writeIcon'>
                        ➕
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}} />
                    <input type='text' placeholder='Title' className='writeTitle' autoFocus={true} />
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Write your blog...' className='writeTitle writeBlog' type='text' />
                </div>
                <button className='submitBlog'>Publish Blog</button>
            </form>
        </div>
    )
}
