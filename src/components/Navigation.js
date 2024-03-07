import '../App.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon" aria-label="toggle navigation menu"></span>
      </label>
      {/* <div className="navigation__background"></div> */}

      <nav className="navigation__nav" role="navigation">
        <div className='menu-content'>
          <div className='menu-links'>

            <div className='menu-open-links'>
              <Link to='/aboutus' title='ABOUT US 關於計畫團隊' className='navigation__link'>
                <h2>ABOUT US</h2>
                <h3>關於計畫團隊</h3>
              </Link>
              <div className='menu-item-links navigation__link'>
                <Link to='/aboutus#vision' title='計畫願景' className='menu-open-link'>
                  計畫願景
                </Link>
                <Link to='/aboutus#our_team' title='計畫願景' className='menu-open-link'>
                  團隊介紹
                </Link>
                <Link to='/aboutus#sponsors' title='贊助' className='menu-open-link'>
                  贊助
                </Link>
                <Link to='/aboutus#contact_info' title='聯絡資訊' className='menu-open-link'>
                  聯絡資訊
                </Link>

              </div>

            </div>

            <div className='menu-open-links'>
              <Link to='/plan/data-curation' title='STEP01' className='navigation__link'>
                <h2>Project Execution Plan</h2>
                <h3>計畫執行規劃</h3>
              </Link>
              <div className='menu-item-links navigation__link'>
                <Link to='/aboutus#vision' title='數據收集' className='menu-open-link'>
                  數據收集
                </Link>
                <Link to='/aboutus#our_team' title='模型架構與訓練' className='menu-open-link'>
                  模型架構與訓練
                </Link>
                <Link to='/aboutus#sponsors' title='驗證與測試' className='menu-open-link'>
                  驗證與測試
                </Link>
                <Link to='/aboutus#contact_info' title='部署與應用' className='menu-open-link'>
                  部署與應用
                </Link>
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