import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";
import SettingsPage from "./pages/settingsPage";
import { useAuth } from "./store/useAuth";

const App = () => {
  const {authUser} = useAuth();
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App