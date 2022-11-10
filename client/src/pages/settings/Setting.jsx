import "./setting.css";
import Sidebar from '../../components/sidebar/Sidebar';
import PP from '../../components/images/side.jpg';

export default function Setting() {
    return (
        <div className='setting'>
            <div className='settingWrapper'>
                <div className='settingTitle'>
                    <span className='updateTitle'>Update Your Account</span>
                    <span className='deleteTitle'>Delete Account</span>
                </div>
                <form className='settingForm'>
                    <label>Profile Picture</label>
                    <div className='PP'>
                        <img src={PP} alt='' />
                        <label htmlFor='fileInput'>
                            <i className="PPicon fab fa-facebook-square"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Ashish' />
                    <label>Email</label>
                    <input type='email' placeholder='ashish@gmail.com' />
                    <label>Password</label>
                    <input type='password' />
                    <button className='updateBtn'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
