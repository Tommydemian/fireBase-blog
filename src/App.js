import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => localStorage.clear);
    setIsAuth(false);
    window.location.pathname = "/login"; // Emulando un navigate('/login')
    // navigate('/login') => You cant navigate here because you are outside of a component that switches from Routes
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
          <button onClick={signUserOut}>Log Out</button>
        
        <Link to="/createpost">
          {" "}
          {/* only logued users can post */}
          Post
        </Link>
        </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
