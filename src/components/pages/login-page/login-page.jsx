import React from "react";
import "./style.scss";
import LoginForm from "../../blocks/login-form/login-form";
import RegisterForm from "../../blocks/register-form/register-form";

export default function LoginPage () {
    return (
        <section className="login">
            <h1 className="login__title">Аккаунт</h1>
            <div className="login__group">
                <LoginForm />
                <RegisterForm />
            </div>
        </section>
    );
}