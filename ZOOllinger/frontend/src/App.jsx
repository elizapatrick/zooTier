import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTicketRoute from "./routes/getTicketRoute";
import { Home } from "./routes/home";
import { ElephantDetail } from "./routes/ElephantDetail";
import { TigerDetail } from "./routes/TigerDetail";
import { GorillaDetail } from "./routes/GorillaDetail";
import { PenguinDetail } from "./routes/PenguinDetail";
import { LionDetail } from "./routes/LionDetail";
import { ParrotDetail } from "./routes/ParrotDetail";
import { AnimalsEmpty } from "./routes/AnimalsEmpty";
import ExperienceRoute from "./routes/ExperienceRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<AnimalsEmpty />} />
        <Route path="/tickets" element={<GetTicketRoute />} />
        <Route path="/animals/elephant" element={<ElephantDetail />} />
        <Route path="/animals/tiger" element={<TigerDetail />} />
        <Route path="/animals/gorilla" element={<GorillaDetail />} />
        <Route path="/animals/penguin" element={<PenguinDetail />} />
        <Route path="/animals/lion" element={<LionDetail />} />
        <Route path="/animals/parrot" element={<ParrotDetail />} />
        <Route path="/experience" element={<ExperienceRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
