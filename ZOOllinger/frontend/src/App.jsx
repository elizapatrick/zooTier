import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTicketRoute from "./routes/getTicketRoute";
import { Home } from "./routes/home";
import { ElephantDetail } from "./routes/ElephantDetail";
import { AnimalsEmpty } from "./routes/AnimalsEmpty";
import ExperienceRoute from "./routes/ExperienceRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<AnimalsEmpty />} />
        <Route path="/tickets" element={<GetTicketRoute />} />
        <Route path="/animals/:id" element={<ElephantDetail />} />
        <Route path="/experience" element={<ExperienceRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
