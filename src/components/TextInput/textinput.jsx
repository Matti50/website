import React from "react";

const TextInput = (props) => (
    <label htmlFor={props.name}>
        {props.text}
        <input required type="text" name="" id={props.name} />
    </label>
)
export default TextInput;