import '../App.css';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import './Header.css';

const Header = ({go=[]}) =>{
    return(
        <div className='header w-nav2 box'>
            <div className="container-regular">
                <div className='navbar-wrapper'>
                    <Link to='/' title='回到首頁' className='navbar-brand w-nav-brand'>
                        <div className='header-title2'>🤖LLM*LLM🧑🏻‍⚖️</div>
                    </Link>
                <div  className="page-anchor">
                    {go && go.map((item)=>(
                    <Nav.Link className='button w-button' href={item.to}>{item.to_where}</Nav.Link>
                    ))}
                </div>                      
                    <Navigation />
                </div>
 
            </div>
 
            <div className='w-nav-overlay' data-wf-ignore id="w-nav-overlay-0" ></div>

        </div>
    )
};

export default Header