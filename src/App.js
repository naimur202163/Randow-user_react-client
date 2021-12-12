
import './App.css';
import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import UserDetails from './Components/UserDetails/UserDetails';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdetails/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
