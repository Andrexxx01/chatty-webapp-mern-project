import Navbar from "./components/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";
import SettingsPage from "./pages/settingsPage";
import { useAuth } from "./store/useAuth";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const App = () => {
  const {authUser, checkAuth, isCheckingAuth} = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if(isCheckingAuth && !authUser) return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App