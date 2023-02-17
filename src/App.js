import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/login";
import MainPage from "./Pages/MainPage/MainPage";
import Navbar from "./Pages/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
