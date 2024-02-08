import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import SearchMenu from "@/pages/Products/SearchMenu";
import ProfileRenter from "@/pages/Profile/ProfileRenter";
import ProfileOwner from "@/pages/Profile/ProfileOwner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchmenu" element={<SearchMenu />} />
        <Route path="/profilerenter" element={<ProfileRenter />} />
        <Route path="/profileowner" element={<ProfileOwner />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
