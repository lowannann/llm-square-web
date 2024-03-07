import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DataCuration from './pages/DataCuration';
import Header from './components/Header';
import ModelTraining from './pages/ModelTraining';
import Evaluation from './pages/Evaluation';
import Application from './pages/Application';

const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/plan/data-curation' element={<DataCuration/>} />
                    <Route path='/plan/model-training' element={<ModelTraining/>} />
                    <Route path='/plan/evaluation' element={<Evaluation/>} />
                    <Route path='/plan/application' element={<Application/>} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App