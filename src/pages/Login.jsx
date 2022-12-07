import React from "react";
import styles from "./../styles/login.module.css";
import { auth, provider } from "./../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <p className={styles.text}>Sign In With google To Continue</p>
        <button className={styles.loginWithGoogle} onClick={signInWithGoogle}>
          Sign In With google
        </button>
      </div>
    </div>
  );
}

export default Login;
