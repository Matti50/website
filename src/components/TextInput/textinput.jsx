import React from "react";

const TextInput = (props) => (
    <label htmlFor={props.name}>
        {props.text}
        <input type="text" name="" id={props.name} />
    </label>
)
export default TextInput;