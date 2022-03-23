import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./routes/Home.jsx";
import ScheduleTemplate from "./routes/ScheduleTemplate.jsx";
import WorksTemplate from "./routes/WorksTemplate.jsx";
import SettingTemplate from "./routes/SettingTemplate.jsx";

import "./app.css";
import WorkDetail from "./components/Works/WorkDetail.jsx";

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
              <Route path="/setting" element={<SettingTemplate />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
