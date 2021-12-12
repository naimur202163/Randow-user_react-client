
import './App.css';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './componets/Home/Home';
import Register from './componets/Login/Register/Register';
import UserDetails from './componets/UserDetails/UserDetails';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './componets/Login/Login/Login';
function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/userdetails/:userId" element={<UserDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registar" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
