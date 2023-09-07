import "./App.css";

import Home from "./views/Home";
import Word from "./views/Word";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:word" element={<Word />} />
                <Route path="/:word/:color/:back" element={<Word />} />
            </Routes>
        </div>
    );
}

export default App;
