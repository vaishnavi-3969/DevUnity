import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
        <div>
          {isAuthenticated && <Navbar/>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
