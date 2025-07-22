import { Routes, Route, useLocation } from "react-router-dom";
import Navbar1 from "./components/NavbarV1/navbar1";
import Navbar2 from "./components/Navbar2/navbar2";
import LandingPage from "./pages/LandingPage/landingPage";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
import Feeds from "./pages/Feeds/feeds";
import MyNetwork from "./pages/MyNetwork/myNetwork";
import Resume from "./pages/Resume/resume";
import Messages from "./pages/Messages/messages";

import Footer from "./components/Footer/footer";
import "./App.css";
import Profile from "./pages/Profile/profile";
import AllActivities from "./pages/AllActivities/allActivities";
import SingleActivity from "./pages/SingleActivity/singleActivity";
import Notification from "./pages/Notification/notification";

function App() {
  const location = useLocation();

  // Define paths where Navbar1 should be shown
  const isPublicRoute = ["/", "/login", "/signUp"].includes(location.pathname);

  return (
    <div className="bg-gray-100 w-full box-border">
      {isPublicRoute ? <Navbar1 /> : <Navbar2 />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/myNetwork" element={<MyNetwork />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/activities" element={<AllActivities />} />
        <Route
          path="/profile/:id/activities/:postId"
          element={<SingleActivity />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
