import { Navigate, Route, Routes } from "react-router-dom";
import "../App.css";
import MainLayout from "../layout/MainLayout";
import LoginContainer from "../container/login";
import ChatLayout from "../layout/ChatLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="login/" />} />

          <Route path="/login" element={<LoginContainer />} />

          <Route path="/register" element={<></>} />
          <Route element={<ChatLayout />}>
            <Route path="/chatroom" element={<>shkdpks</>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
