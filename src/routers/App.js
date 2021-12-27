// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Footer from "../components/Footer";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavs from "../pages/PageFavs";
import PageSingleMovie from '../pages/PageSingleMovie'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/movie/:id" element={<PageSingleMovie />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favs" element={<PageFavs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
