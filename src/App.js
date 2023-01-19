import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout></Layout>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/leaderboard"
            element={<Leaderboard></Leaderboard>}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
