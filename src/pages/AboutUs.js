import About from "../components/About";
import Description from "../components/Description";
import Plan from "../components/Plan";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import CardItemContent from "../components/CardItemContent";
import ContactInfoContent from "../components/ContactInfoContent";
import Nav from 'react-bootstrap/Nav';
import Header from "../components/Header";
import "./AboutUs.css"
import llmImage from '../llm_studying.png'
import nvidia from '../nvidia.png'
import ntu from '../ntu.png'

const AboutUs = () =>{
        const go =[
            {to:'#vision', to_where:'計畫願景'},
            {to:'#our_team', to_where:'團隊介紹'},
            {to:'#contact_info', to_where:'聯絡資訊'},
            {to:'#contact_us', to_where:'聯絡我們'}
        ];    

    return( 
        <div >
            <Header go={go}/>

            <div className='content-1'>

                <section id='vision' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                        <div className='text-container left'>
                            <div className='title-area left'>
                                <h2>VISION</h2>
                                <h3>計畫願景</h3>
                            </div>
                            <p>我們的團隊，是一個結合法律學、語言學、自然語言處理的研究人員組成，幾年來參加司法院與七法法律搜尋引擎(Lawsnote)舉辦的黑客松活動獲得各種不同的獎項。</p>
                        </div>
                        <img src={llmImage} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>
                    </div>
                </section>

                <section id='our_team' className="section-2 whitebg">
                    <div className="vertical-area">
                        <div className="text-container center">
                            <div className="title-area">
                                <h1>OUR TEAM</h1>
                                <h3>團隊介紹</h3>
                            </div>
                        </div>
                        <div className="project01-description-container">
                            <div className="content-row">
                                <CardItem 
                                    title = {
                                                <span>
                                                    <a href="https://lope.linguistics.ntu.edu.tw" target="_blank" rel="noopener noreferrer">  
                                                        台大語言所<br/>
                                                        「知識本體、語言處理與人文計算實驗室」<br/>
                                                        <span className="small-font">
                                                                Lab of Ontologies, Language Processing 
                                                            <br/>
                                                                and E-humanities (LOPE)
                                                        </span>
                                                    </a>
                                                </span>
                                            } 
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName='國立台灣大學語言學研究所 謝舒凱副教授' 
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>國立台灣大學語言學研究所 <br/>國立台灣大學語言學研究所 </span>
                                                    }
                                />

                                <CardItem 
                                    title = { 
                                                <span>
                                                    <a href="https://llntu.github.io" target="_blank" rel="noopener noreferrer">  
                                                        台大法學院<br/>
                                                        <br/>
                                                        <span className="small-font">Laboratory of Legal Analytics  <br/>(LLNTU) </span>
                                                    </a>
                                                </span>
                                            }
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName='國立台灣大學法律學院 黃詩淳教授' 
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>國立台灣大學法律學院 <br/>國立台灣大學法律學院 </span>
                                                    }                                       
                                            
                                            
                                />


                            </div>
                            <div className="content-row">
                                <CardItem 
                                    title = {
                                        <span>
                                            <a href="https://sites.google.com/view/cclab/home" target="_blank" rel="noopener noreferrer">  
                                                台大新聞所<br/>
                                                「計算傳播研究室」<br/>
                                                <span className="small-font">
                                                    Computational Communication Lab (Com.Comm. Lab) 
                                                </span>
                                            </a>
                                        </span>
                                    } 
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName='國立台灣大學新聞研究所 謝吉隆副教授' 
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>國立台灣大學新聞研究所 <br/>國立台灣大學新聞研究所 </span>
                                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id='contact_us' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                            <div className='text-container left'>
                                <div className='title-area left'>
                                    <h2>Sponsors</h2>
                                    <h3>贊助</h3>
                                </div>

                            </div>
                            <img src={ntu} loading="lazy" style={{ width: '200px', height: '200px' }} alt=" " className="featured-image"/>
                            <img src={nvidia} loading="lazy" style={{ width: '400px', height: '200px' }} alt=" " className="featured-image"/>
                    </div>                                                    
                </section>

                <section id='contact_info' className="section-2 greybg">
                <div className='horizontal-area'>
                        <div className='text-container lef'>
                            <div className='title-area left whitecolor'>
                                <h2>
                                    CONTACT
                                    <br/>
                                    INFO
                                </h2>
                                <h3>聯絡資訊</h3>
                            </div>
                        </div>
                        <div className='contact-info whitecolor'>
                            <ContactInfoContent contactOffice='LOPE＠台大語言所' phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                            <ContactInfoContent contactOffice='LLNTU＠台大法學院' phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                            <ContactInfoContent contactOffice={<span>Com.Comm. Lab<br/>＠台大新聞所</span>} phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                        </div>
                </div>
                </section>


            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>    );

}

export default AboutUs