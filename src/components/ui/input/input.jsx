import React from "react";
import "./input.scss"

export default function Input (props) {
    const { placeholder, type, id, children, error, onChange, value, name, width } = props;
    return (
        <div className={`input__wrapper ${error?.[id]?.length ? 'error':''}`} style={width}>
            <label className="input__label" htmlFor={id}>{children}</label>
            <input className="input__field" type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            {error?.[id]?.length ? <p className="input__erros-message">{error[id][0]}</p> : null}
        </div>
    );
}