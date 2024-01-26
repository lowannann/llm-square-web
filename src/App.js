import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Step01 from './pages/Step01';
import Header from './components/Header';

const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/step01' element={<Step01/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App