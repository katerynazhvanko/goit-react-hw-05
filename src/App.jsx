import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  return (
    <>
      <h1>React Router</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/movie" element={<div>Movie page</div>} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="/payments" element={<div>Payments page</div>} />
        <Route path="*" element={<div>Not 404 found</div>} />
      </Routes>
    </>
  );
}
