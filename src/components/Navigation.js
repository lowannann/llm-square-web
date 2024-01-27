import '../App.css';
import { Link } from 'react-router-dom';

const Navigation=()=>{
    return(
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="navigation__button">
            <span className="navigation__icon" aria-label="toggle navigation menu"></span>
        </label>
        <div className="navigation__background"></div>

            <nav className="navigation__nav" role="navigation">
              <div className='menu-content'>
                <div className='menu-links'>

                  <div className='menu-open-links'>
                    <Link to='/aboutus' title='ABOUT US 關於計畫團隊' className='navigation__link'>
                      <h2>ABOUT US</h2>
                      <h3>關於計畫團隊</h3>
                    </Link>
                    <div className='menu-item-links navigation__link'> 
                      <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                      <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                      <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                      <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
                    </div>

                  </div>

                  <div className='menu-open-links'>
                    <Link to='/step01/first' title='STEP01' className='navigation__link'>
                      <h2>STEP 01</h2>
                      <h3>數據收集和預處理</h3>
                    </Link>
                    <div className='menu-item-links navigation__link'>
                      <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                      <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                      <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                      <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
                    </div>
                  </div>

                  <div className='menu-open-links'>
                    <a title='PROJECT 02' className='navigation__link'>
                      <h2>PROJECT 02</h2>
                      <h3>關於計畫團隊</h3>
                    </a>
                    <div className='menu-item-links'>
                      <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                      <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                      <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                      <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
                    </div>
                  </div>

                    <div className='menu-open-links'>
                      <a title='PROJECT 03' className='navigation__link'>
                        <h2>PROJECT 03</h2>
                        <h3>關於計畫團隊</h3>
                      </a>
                      <div className='menu-item-links'>
                        <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                        <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                        <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                        <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
                      </div>
                    </div>

                    <div className='menu-open-links'>
                      <a title='PROJECT 04' className='navigation__link'>
                        <h2>ABOUT US</h2>
                        <h3>關於計畫團隊</h3>
                      </a>
                      <div className='menu-item-links'>
                        <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                        <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                        <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                        <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
                      </div>
                    </div>

                    <div className='menu-open-links'>
                      <a title='PROJECT 04' className='navigation__link'>
                        <h2>ABOUT US</h2>
                        <h3>關於計畫團隊</h3>
                      </a>
                      <div className='menu-item-links'>
                        <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                        <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                        <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                        <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
                      </div>
                    </div>
                  </div>
              </div>
            </nav>
        </div>

    )
}

export default Navigation