import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import CreatePost from "./pages/CreatePost";
import { Fragment, useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <div className={styles.container}>
          <Link to="/home" className={styles.navLink}>
            Home
          </Link>

          {!isAuth ? (
            <Link to="/login" className={styles.navLink}>
              Login
            </Link>
          ) : (
            <Fragment>
              <Link to="/createpost" className={styles.navLink}>
                CreatePost
              </Link>
              <div>
                <button className={styles.logOut} onClick={signUserOut}>
                  Logout
                </button>
                <span
                  className={styles.userName}
                >{`Hi ${auth.currentUser.displayName}`}</span>
              </div>
            </Fragment>
          )}
        </div>
      </nav>
      <Routes>
        <Route exact path="/"  element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
