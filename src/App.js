import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./routes/Home.jsx";
import TodoTemplate from "./routes/TodoTemplate.jsx";
import WorksTemplate from "./routes/WorksTemplate.jsx";
import SettingTemplate from "./routes/SettingTemplate.jsx";

import "./app.css";
import WorkDetail from "./components/Works/WorkDetail.jsx";

function App() {
  return (
    <div className="App">
      <div className="board">
        <div className="board-wrapper">
          <div className="nav">
            <Nav />
          </div>
          <div className="routes-wrapper">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/todo" element={<TodoTemplate />}></Route>
              <Route path="/works" element={<WorksTemplate />}></Route>
              <Route path="/works/:id" element={<WorkDetail />}></Route>
              <Route path="/setting" element={<SettingTemplate />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
