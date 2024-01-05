import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import FilmesScreen from "./screens/FilmesScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SeriesScreen from "./screens/SeriesScreen";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import React from "react";

function App() {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <React.Suspense fallback={<Loading />}>
    <Router>
      <Routes>
        
          <Route path="/" element={<HomeScreen baseImgURL={BASE_IMG_URL} />} />
          <Route
            path="/filmes"
            element={<FilmesScreen baseImgURL={BASE_IMG_URL} />}
          />
          <Route
            path="/series"
            element={<SeriesScreen baseImgURL={BASE_IMG_URL} />}
          />
      </Routes>
      <Footer />
    </Router>
    </React.Suspense>
  );
}

export default App;
