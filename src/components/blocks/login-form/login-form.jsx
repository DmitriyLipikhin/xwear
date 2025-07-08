import React from "react";
import "./style.scss";
import { login } from "../../../services/authForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    const cancelSubmit = async (evt) => {
        evt.preventDefault();
        try {
          await login(username, password);
          navigate("/personal-account");
          setError([]);
        }catch (err) {
            const errorParse = JSON.parse(err.message);
            setError(errorParse);
        }
    }

    return (
        <div className="login__container">
            <h2 className="login__form-title">Войти</h2>
            <form onSubmit={cancelSubmit} className="login__form">
                    <div className={`login__form-group ${error.non_field_errors || error.username ? 'login__form-group--error':''}`}>
                        <label className="login__form-label" htmlFor="login">Email адрес:</label>
                        <input className="login__form-input" type="text" id="login" placeholder="yavasyaivanov@gmail.com" value={username} onChange={(e) => setUsername(e.target.value)} />
                        {error.username ? <p className="login__form-error">{error.username}</p> : null}
                    </div>
                    <div className={`login__form-group ${error.non_field_errors || error.password ? 'login__form-group--error':''}`}>
                        <label className="login__form-label" htmlFor="password">Пароль:</label>
                        <input className="login__form-input" type="password" name="password" id="password" placeholder="123" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {error.non_field_errors || error.password ? <p className="login__form-error">{error.non_field_errors || error.password}</p> : null}
                    </div>
                    <div className="login__form-remember">
                        <span className="login__form-remember-mark"></span>
                        <label htmlFor="remember" className="login__form-remember-label">Запомнить меня</label>
                        <input type="checkbox" className="visually-hidden" id="remember" name="remember"/>
                        <a href="/#" className="login__form-remember-forgot">Забыли пароль?</a>
                    </div>
                    <button className="login__form-submit" type="submit">Войти</button>
            </form>
        </div>
    );
}
