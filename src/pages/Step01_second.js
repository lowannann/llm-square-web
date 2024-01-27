import '../App.css'
import Button from 'react-bootstrap/Button';


const Step01_second =()=>{

    return(
        <div >
            <Header />
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
                    </div>
                    <div className='project-tab-list'>
                    <Link to='/step01/first' title='第一步' className='button w-button w--current'>
                        第一步
                    </Link>
                    <Link to='/step01/second' title='第二步' className='button w-button w--current'>
                        第二步
                    </Link>
                    <Link to='#' title='第三步' className='button w-button w--current'>
                        第三步
                    </Link>
                    </div>
                </div>
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


            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>
        )
}

export default Step01_second;