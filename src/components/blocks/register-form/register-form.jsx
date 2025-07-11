import React from "react";
import "./style.scss";
import { registersAccount } from "../../../services/authForm";
import { useState } from "react";

export default function RegisterForm () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const cancelSubmit = (evt) => {
        evt.preventDefault();
        registersAccount(email, password);
        console.log(email);
    }

    return (
        <div className="login__register-container">
            <h2 className="login__register-form-title">Регистрация</h2>
            <form className="login__register-form" onSubmit={cancelSubmit}>
                <div className="login__register-form-group">
                    <label className="login__register-form-label" htmlFor="login">Email адрес:</label>
                    <input className="login__register-form-input" type="text" placeholder="yavasyaivanov@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="login__register-form-group">
                    <label className="login__register-form-label" htmlFor="reg-password">Пароль:</label>
                    <input className="login__register-form-input" type="password" name="reg-password" id="reg-password" placeholder="123" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login__register-form-group">
                <label className="login__register-form-label" htmlFor="reg-repeat-password">Повторите пароль:</label>
                    <input className="login__register-form-input" type="password" name="reg-repeat-password" id="reg-repeat-password" placeholder="123" />
                </div>
                <button className="login__register-form-submit" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}