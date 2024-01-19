import '../App.css';

const About = () =>{
    return (
    <div className="horizontal-area mobile-switch">
        <div className='text-container-left'>
            <div className='title-area-left'>
                <h2>ABOUT US</h2>
                <h3>關於計畫團隊</h3>
            </div>
            <p>我們的團隊，是一個結合法律學、語言學、自然語言處理的研究人員組成，幾年來參加司法院與七法法律搜尋引擎(Lawsnote)舉辦的黑客松活動獲得各種不同的獎項。</p>
            <a href='' title='深入了解' className='button w-button'>深入了解</a>
        </div>
        <img src="https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd88ec265cba5e4e3ab57_About%20Us.png" loading="lazy" srcset="https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd88ec265cba5e4e3ab57_About%2520Us-p-500.png 500w, https://assets-global.website-files.com/64a66a91acab043566a519f9/64afd88ec265cba5e4e3ab57_About%20Us.png 1400w" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>
    </div>
    );
}

export default About

