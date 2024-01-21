import '../App.css';
import Bars from './Bars';



const Header = () =>{
    return(
        <div className='header w-nav'>
            <div className="container-regular">
                <div className='navbar-wrapper'>
                <a href='#!' title='回到首頁' className='navbar-brand w-nav-brand'>

                        <img srcSet='https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd7cc9e75bbdb41f8ea1e_Header%20Logo.png' loading="lazy" alt="logo" style={{ width: '258px', height: '50.78px' }}>
                        </img>
                </a>
                    <Bars />
                </div>
            </div>
            <div className='w-nav-overlay' data-wf-ignore id="w-nav-overlay-0" ></div>

        </div>
    )
};

export default Header