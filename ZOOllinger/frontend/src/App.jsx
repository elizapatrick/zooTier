import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTicketRoute from "./routes/getTicketRoute";
import { Home } from "./routes/home";
import { ElephantDetail } from "./routes/ElephantDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Home />} />
        <Route path="/tickets" element={<GetTicketRoute />} />
        <Route path="/animals/:id" element={<ElephantDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
