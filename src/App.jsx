import './style.scss'
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home/Home'
import { ErrorPage } from './pages/errorPage/ErrorPage'
import { AboutPage } from './pages/aboutPage/AboutPage';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';



function App() {
  return (
    <>
      <Header />
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer />
    </>
  )  
}
  
export default App;
