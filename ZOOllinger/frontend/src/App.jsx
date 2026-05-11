import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTicketRoute from "./routes/getTicketRoute";
import ExperienceRoute from "./routes/ExperienceRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Startseite</h1>} />
        <Route path="/tickets" element={<GetTicketRoute />} />
        <Route path="/experience" element={<ExperienceRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
