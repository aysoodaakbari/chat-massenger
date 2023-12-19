import { Navigate, Route, Routes } from "react-router-dom";
import "../App.css";
import MainLayout from "../layout/mainLayout";
import LoginContainer from "../container/login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="login/" />} />

          <Route path="/login" element={<LoginContainer />} />

          <Route path="/register" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
