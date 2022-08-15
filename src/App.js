import "./App.css";
//import Components
import Home from "../src/Components/Home/Home";
import CardDetails from "../src/Components/CardDetails/CardDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CardDetails/:card" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
