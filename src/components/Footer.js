import '../App.css'

const Footer = () =>{
    return(
        <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-brand-area'>
            <a href="/" title="回到首頁" aria-current="page" className="footer-brand w-inline-block w--current02">
            </a>
            <div className='footer-social-links'>
                <a>
                    <div className='social-icon w-embed'></div>
                    <svg width="28" height="29" viewBox="0 0 28 29"></svg>
                </a>
                <a>
                    <div className='social-icon w-embed'></div>
                    <svg width="28" height="29" viewBox="0 0 28 29"></svg>
                </a>
                <a>
                    <div className='social-icon w-embed'></div>
                    <svg width="28" height="29" viewBox="0 0 28 29"></svg>
                </a>
            </div>
                <div className='text_s'>
                    電話：
                    <br/>
                    email：
                    <br/>
                    地址：
                </div>
            </div>

            <div className='footer-content'>
                <div className='footer-block'>
                    <a title='關於計畫團隊' href='' className='footer-link-title w-inline-block'>
                        <div className='title-small'>關於計畫團隊</div>
                    </a>
                    <a title='計畫願景' className='footer-link'>計畫願景</a>
                    <a title='團隊介紹' className='footer-link'>團隊介紹</a>
                    <a title='贊助' className='footer-link'>聯絡我們</a>
                    <a title='聯絡資訊' className='footer-link'>聯絡資訊</a>
                </div>

                <div className='footer-block'>
                    <a title='總計劃' href='' className='footer-link-title w-inline-block'>
                        <div className='title-small'>總計劃</div>
                    </a>
                    <a title='數據收集和預處理' className='footer-link'>數據收集和預處理</a>
                    <a title='模型架構與訓練' className='footer-link'>模型架構與訓練</a>
                    <a title='驗證與測試' className='footer-link'>驗證與測試</a>
                    <a title='部署與應用' className='footer-link'>部署與應用</a>
                </div>

                <div className='footer-block'>
                    <a title='子計劃' href='' className='footer-link-title w-inline-block'>
                        <div className='title-small'>子計劃</div>
                    </a>
                    <a title='子一「微調與評測」' className='footer-link'>子一「微調與評測」</a>
                    <a title='子二「引用與推薦」' className='footer-link'>子二「引用與推薦」</a>
                    <a title='子三「驗證與測試」' className='footer-link'>子三「驗證與測試」</a>
                    <a title='子四「微調應用」' className='footer-link'>子四「微調應用」</a>
                </div>

                <div className='footer-block'>
                    <a title='最新消息' href='' className='footer-link-title w-inline-block'>
                        <div className='title-small'>最新消息</div>
                    </a>
                    <a title='最新消息' className='footer-link'>最新消息</a>
                    <a title='黑客松' className='footer-link'>黑客松</a>
                    <a title='招募' className='footer-link'>招募</a>
                </div>

            </div>




        </div>
        <div className='footer-bottom'>
            <div className='footer-copyright-center'>Copyright © 2024</div>

        </div>

    </div>
    )
}

export default Footer