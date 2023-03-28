import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
