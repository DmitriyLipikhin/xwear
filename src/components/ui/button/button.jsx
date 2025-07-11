import React from "react";
import "./button.scss"

export default function Button ({type, children}) {
    return (
        <button className="button" type={type}>{children}</button>
    );
}