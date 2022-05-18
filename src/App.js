import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./pages/Home.jsx";
import ScheduleTemplate from "./pages/ScheduleTemplate.jsx";
import WorksTemplate from "./pages/WorksTemplate.jsx";
import WorkDetail from "./components/Works/WorkDetail.jsx";
import SettingTemplate from "./pages/SettingTemplate.jsx";
import AboutTemplate from "./pages/AboutTemplate.jsx";

import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="board">
        <div className="board-wrapper">
          <Nav />
          <div className="routes-wrapper">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/schedule" element={<ScheduleTemplate />}></Route>
              <Route path="/works" element={<WorksTemplate />}></Route>
              <Route path="/works/:id" element={<WorkDetail />}></Route>
              <Route path="/about" element={<AboutTemplate />}></Route>
              <Route path="/setting" element={<SettingTemplate />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
