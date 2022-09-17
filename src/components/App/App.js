import Favicon from 'react-favicon';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  return (
    <>
      <Header />
      <Promo />
      <div className="app">
        <Favicon
          url={require('../../styles/images/50years_favicon.png')}
        ></Favicon>

        <Routes>
          <Route exact path="/" element={<Main />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
