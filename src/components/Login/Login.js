import React, { useState } from "react";
import styles from "./Login.module.scss";
import { login } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sessionLogin } from "../../features/sessionSlice";

const Login = () => {
    // init settings and hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [error, setError] = useState(null);

    // functions to be used
    const handleSubmit = async (e) => {
        e.preventDefault();
        let body = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        try {
            let state = await login(body);
            if (state.status === "Success") {
                dispatch(sessionLogin({ logged: true, data: state.data }));
                navigate("/");
            }
        } catch (error) {
            setError("Invalid username or password");
        }
    };

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="email@footprints.com"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <div className={`${styles.formGroup} ${styles.checkGroup}`}>
                    <label htmlFor="remember-me">
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="remember-me"
                        />{" "}
                        Remember Me
                    </label>
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
