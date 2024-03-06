import '../App.css';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import './HomeHeader.css'

const HomeHeader = () =>{
    return(
        <div className='w-nav'>
            <div className="ani-header box">
                    <div className='header-title '>
                            🤖LLM*LLM🧑🏻‍⚖️ 
                    </div>
            </div>

            <Navigation />

        </div>
    )
};

export default HomeHeader