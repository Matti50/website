import React from "react";
import TextInput from "../TextInput/textinput";
import "./contact.css";

const Contact = () => (
    <div className="contact">
        
        <h2>Contact Me!</h2>
        <form className="contact-form">
            <TextInput name="name" text="Your Name:"/>
            <TextInput name="subject" text="Subject:"/>
            <TextInput name="email" text="Email:"/>            
            <label htmlFor="message">
                Message:
               <textarea name="" id="message" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Send!"/>
        </form>

    </div>
)
export default Contact;