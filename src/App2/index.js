// import "./App.css";
import Home2 from "./Home2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import CardDetails from "../Components/CardDetails/CardDetails";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home2 />}>
        <Route path="/CardDetails/:card" element={<CardDetails />} />
        <Route path="*" element={<CardDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
