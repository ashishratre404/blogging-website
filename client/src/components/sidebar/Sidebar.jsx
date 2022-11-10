import './sidebar.css';
import profile from '../images/profile.jpg';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src={profile} alt='' />
                <p>I am the creater and owner of this wonderful blogging website.
                 you can contact me for your own website</p>
            </div>
            <div className='sidbarItem'>
                <span className='sidebarTitle cat'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Technology</li>
                    <li className='sidebarListItem'>Gaming</li>
                    <li className='sidebarListItem'>Sports</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Cinema</li>
                    <li className='sidebarListItem'>Politics</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocials'>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}
