import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTicketRoute from "./routes/getTicketRoute";
import { Home } from "./routes/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<GetTicketRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
