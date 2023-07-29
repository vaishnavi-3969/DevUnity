import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./components/Home/UserProfile";
import Explore from "./components/Explore/Explore";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="/userprofile/:userId" element={<UserProfile/>} exact/>
          <Route path="/explore" element={<Explore/>} exact/>
        </Routes>
        <div>
          {isAuthenticated && <Navbar/>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
