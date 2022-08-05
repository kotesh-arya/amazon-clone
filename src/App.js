import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>Home Page!!!</h2>
    </div>
  );
}
export default App;
