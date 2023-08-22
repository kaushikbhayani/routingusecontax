import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import NavHeader from "./navigationComponent/NavHeader";
import CreateAccount from "./pages/CreateAccount";
import { LogOutLayout } from "./navigationComponent/LogOutLayout";
import { LoginLayout } from "./navigationComponent/LoginLayout";
import { AuthProvider } from "./routeHelper/ProtectedRouter";
import About from "./pages/About";
import HomeScreen from "./UserScreen/HomeScreen";
import TopHeader from "./NaveComponent/TopHeader";
import ManuScreen from "./UserScreen/ManuScreen";
import DetaileScreen from "./UserScreen/DetaileScreen";
import BookTableScreen from "./UserScreen/BookTableScreen";
import BottomFooter from "./NaveComponent/BottomFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<LogOutLayout />}></Route>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/" element={<TopHeader className={"HdrStyle"} />}>
              <Route path="/manuScreen" element={<ManuScreen />} />
              <Route path="/detaileScreen" element={<DetaileScreen />} />
              <Route path="/bookTableScreen" element={<BookTableScreen />} />
              <Route path="/splash" element={<Splash />} />
              <Route path="/createAccount" element={<CreateAccount />} />
            </Route>

            <Route path="/dashboard" element={<LoginLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
