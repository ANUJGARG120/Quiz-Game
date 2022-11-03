
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Questions from "./components/Questions";
import { useState } from "react";
import Result from "./components/Result";
import './style.css';

function App() {
  const [answer, setAnswer] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions" element={<Questions answer={answer} setAnswer={setAnswer} />}></Route>
        <Route path="/solution" element={<Result answer={answer}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
