import '../App.css';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import './HomeHeader.css'

const HomeHeader = () =>{
    return(
        <div className='w-nav '>
            <div className="ani-header box ">
                <div className='header-title typewriter'>
                    <div className='first-word'>🧑🏻‍⚖️llm</div>
                    <div className='second-word'>Square</div>                         
                </div>

            </div>
            <div className='box'>
                <Navigation />
            </div>

        </div>
    )
};

export default HomeHeader