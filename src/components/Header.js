import '../App.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <div className='header w-nav'>
            <div className="container-regular">
                <div className='navbar-wrapper'>
                    <Link to='/' title='回到首頁' className='navbar-brand w-nav-brand'>
                            <img srcSet='https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd7cc9e75bbdb41f8ea1e_Header%20Logo.png' loading="lazy" alt="logo" style={{ width: '258px', height: '50.78px' }}>
                            </img>
                    </Link>
                    <Nav />
                </div>
            </div>
            <div className='w-nav-overlay' data-wf-ignore id="w-nav-overlay-0" ></div>
            <div className="page-anchor">
                    <a href="#contact-info">hihi</a>
                </div>
        </div>
    )
};

export default Header