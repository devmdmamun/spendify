import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./component/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {user && <Home />}
                  {!user && <Navigate to="/login" />}
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {!user && <Login />}
                  {user && <Navigate to="/" />}
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  {!user && <Signup />}
                  {user && <Navigate to="/" />}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
