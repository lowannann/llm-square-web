import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import Header from './components/Header';

const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>
                <Header />

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App