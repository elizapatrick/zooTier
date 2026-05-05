import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetTicketRoute from "./routes/getTicketRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Startseite</h1>} />
        <Route path="/tickets" element={<GetTicketRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
