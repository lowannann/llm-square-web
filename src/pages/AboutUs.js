import About from "../components/About";
import Description from "../components/Description";
import Plan from "../components/Plan";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import CardItemContent from "../components/CardItemContent";
import ContactInfoContent from "../components/ContactInfoContent";
import Nav from 'react-bootstrap/Nav';
import Header from "../components/Header";

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
                        <img src="https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd88ec265cba5e4e3ab57_About%20Us.png" loading="lazy" srcset="https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd88ec265cba5e4e3ab57_About%2520Us-p-500.png 500w, https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd88ec265cba5e4e3ab57_About%20Us.png 1400w" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>
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
                                <CardItem title={<span>「以包容為導向之科技計畫」<br/>推動與協調計畫團隊</span>} description='本計畫以「邁向包容為導向的科技社會，達成社會正義及社會平權」為目標。計畫辦公室負責統合協調三項子計畫，促進子計畫推動執行及彼此協調，並策定及調整各項任務，包括邁向數位包容國家所需之公私部門資料盤點與串接、數位創新經濟之普惠發展、以促進社會正義為目標之數位治理等重要事務。同時，為確保各項計畫順利執行，並及時分享實務經驗與交流，計畫辦公室將針對各項子計畫，實施成效評估與稽核，及定期召開工作會議、研討會、國際交流等共學活動。'
                                leader='計畫主持人' leaderName='國立台灣大學語言學研究所 謝舒凱副教授' coleader='共同主持人' coleaderName={<span>國立台灣大學語言學研究所 謝舒凱副教授<br/>國立台灣大學語言學研究所 謝舒凱副教授</span>}/>
                                <CardItem title={<span>包容智慧治理大數據分析<br/>以議題為導向計畫</span>}/>
                            </div>
                            <div className="content-row">
                                <CardItem title={<span>偏鄉交通服務平權計畫</span>}/>
                                <CardItem title={<span>公民智慧培力計畫</span>}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='contact_info' className="section-2 beigebg">
                    <div className='horizontal-area'>
                        <div className='text-container lef'>
                            <div className='title-area left'>
                                <h2>
                                    CONTACT
                                    <br/>
                                    INFO
                                </h2>
                                <h3>聯絡資訊</h3>
                            </div>
                        </div>
                        <div className='contact-info'>
                            <ContactInfoContent contactOffice='LOPE' phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                            <ContactInfoContent contactOffice='LOPE' phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                            <ContactInfoContent contactOffice='LOPE' phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                            <ContactInfoContent contactOffice='LOPE' phone='02-8888888' email='_____@ntu.edu.tw' contact='謝舒凱 副教授'/>
                        </div>
                    </div>
                </section>

                <section id='contact_us' className="section-2 greybg">
                    <div className="vertical-area">
                        <div className="text-container center">
                            <div className="title-area whitecolor">
                                <h2>CONTACT US</h2>
                                <h3>聯絡我們</h3>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-2 w-form">
                        
                    </div>

                </section>
            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>    );

}

export default AboutUs