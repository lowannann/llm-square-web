import '../App.css'
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer";
import dataCuration from "../data_curation.png"


const ModelTraining =()=>{

    return(
        <div >
            <Header />

            <div className='content-1'>
                <div className='project-title'>
                    <div className='text-container lef'>
                        <div className='title-area left'>
                            <h3>
                                <strong>
                                    
                                </strong>
                            </h3>
                            <h1>計畫執行規劃</h1>
                        </div>

                        <div className='project-tab-list'>
                        <NavLink
                            to="/plan/data-curation"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            數據收集
                        </NavLink>

                        <NavLink
                            to="/plan/model-training"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            模型架構與訓練
                        </NavLink>

                        <NavLink
                            to="/plan/evaluation"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            驗證與測試
                        </NavLink>

                        <NavLink
                            to="/plan/application"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            部署與應用
                        </NavLink>
                        </div>                        
                    </div>

                </div>

                <section id='vision' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                        <div className='text-container left'>
                            <div className='title-area left'>
                                <h2>model architecture and training</h2>
                                <h3>模型架構與訓練</h3>
                            </div>
                            <p>利用收集的數據和NVIDIA的高效計算資源進行模型的訓練與優化。NVIDIA的 NeMo SDK 為生成式 AI 建立良好的安全護欄，並搭配 LangChain 工具包使用並在開發的應用程式加入限制。</p>
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

export default ModelTraining;