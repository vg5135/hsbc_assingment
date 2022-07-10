import Board from "./Board";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Assignment2 } from "./Assignment2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/ass02" element={<Assignment2 />} />
      </Routes>
    </div>
  );
}

export default App;
