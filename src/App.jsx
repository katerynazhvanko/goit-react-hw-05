
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <h1>React Router</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
