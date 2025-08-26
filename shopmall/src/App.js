// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Data from './components/data';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from "./components/Details";
function App() {
  let [shoes, shoes변경] = useState(Data);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home shoes={shoes} />}>
        </Route>
        <Route path="/detail" element={<Details />}>
        </Route>        
      </Routes>
    </div>
  );
}
export default App;