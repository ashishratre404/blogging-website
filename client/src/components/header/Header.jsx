import './header.css';
import headerImg from '../images/header.jpg';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>Share your story</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImage' src={headerImg} alt='headerPic' />
        </div>
    )
}
