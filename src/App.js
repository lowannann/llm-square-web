import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Step01_first from './pages/Step01_first';
import Header from './components/Header';

const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/step01/first' element={<Step01_first/>} />
                    <Route path='/step01/second' element={<Step01_first/>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App