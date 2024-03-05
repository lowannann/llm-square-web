import '../App.css';
import './Step01_first.css'
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import dataCuration from '../data_curation.png'



const Step01_first =()=>{

    return(
        <div >
            <Header />

            <div className='content-1'>
                <div className='project-title'>
                    <div className='text-container lef'>
                        <div className='title-area left'>
                            <h3>
                                <strong>
                                    階段一
                                </strong>
                            </h3>
                            <h1>數據收集和預處理</h1>
                        </div>

                        <div className='project-tab-list'>

                        <NavLink
                            to="/step01/first"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            第一步
                        </NavLink>

                        <NavLink
                            to="/step01/second"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            第二步
                        </NavLink>

                        </div>

                    </div>

                </div>

                <section id='vision' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                        <div className='text-container left'>
                            <div className='title-area left'>
                                <h2>Data Curation</h2>
                                <h3>數據收集</h3>
                            </div>
                            <p>目前已經蒐集超過十年的司法院判決、判例、解釋；與持續更新的社群語料庫法律相關的貼文 (ptt/D) ，與關鍵詞與構式擷取與處理工具。</p>
                        </div>
                        <img src={dataCuration} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>

                    </div>
                </section>


            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>
        )
}

export default Step01_first;