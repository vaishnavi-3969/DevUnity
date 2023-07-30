import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./components/Home/UserProfile";
import Projects from "./components/Projects/Projects";
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications/Notifications";
import Upload from "./components/Uploads/Upload";
import ProjectShowcase from "./components/Project_Showcase/ProjectShowcase";
import Code from "./components/Code/Code";
import DevReels from "./components/Reels/DevReels";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="/userprofile/:userId" element={<UserProfile/>} exact/>
          <Route path="/projects" element={<Projects/>} exact/>
          <Route path="/explore" element={<Explore/>} exact/>
          <Route path="/notifications" element={<Notifications/>} exact/>
          <Route path="/upload" element={<Upload/>} exact/>
          <Route path="/project_showcase" element={<ProjectShowcase/>} exact/>
          <Route path="/code" element={<Code/>} exact/>
          <Route path="/projects" element={<Projects/>} exact/>
          <Route path="/devreels" element={<DevReels/>} exact/>
        </Routes>
        <div>
          {isAuthenticated && <Navbar/>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
