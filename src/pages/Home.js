import '../App.css';

import Card from '../components/Card';
import About from '../components/About';
import Description from '../components/Description';
import Plan from '../components/Plan';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeHeader from '../components/HomeHeader';




const Home = () => {
    return (
        <div >
            <HomeHeader />
            <div className='content-1'>
                {/* <section className="hero">
                    <div className="content">
                        <Card />
                    </div>

                </section> */}

                <section className="section-1 beigebg">
                    <About />
                </section>

                <section className="section-2 whitebg">
                    <Description />
                </section>

                <section className="section-2 beigebg">
                    <div className='vertical-area'>
                        <div className='text-container orizontal'>
                            <div className='title-area left'>
                                <h2>
                                    LATEST
                                    <br />
                                    PROJECT
                                </h2>
                                <h3>最新跨域協作計畫</h3>
                            </div>
                            <a href="/project02/existing-projects" title="查看全部" className="button w-button">查看全部</a>
                        </div>
                        <div className='home-project-item-list w-dyn-list'>
                            <div role="list" className="project-items w-dyn-items">
                                <Plan imgSrc='https://www.hollywoodreporter.com/wp-content/uploads/2023/10/RAM_704c-16x9_H.jpg?w=1296' text='LOPE1' />
                                <Plan imgSrc='https://media.cnn.com/api/v1/images/stellar/prod/230926103801-rick-morty-trailer-s7.jpg?c=16x9&q=w_800,c_fill' text='LOPE2' />
                                <Plan imgSrc='https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.2x.h473.w710.jpg' text='LOPE3' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='footer'>
                <Footer />
            </section>
        </div>
    );

}

export default Home