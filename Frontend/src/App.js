import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div>
          <Routes>
            <Route
              path="/"
              element={user ? <Home/> : <Navigate to='/login'/>}
            />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to='/'/>}
            />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to='/'/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
