import React from "react";
import TextInput from "../TextInput/textinput";
import "./contact.css";


function resetForm(){
    document.getElementById("contact-form").reset();
}

function handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const axios = require("axios").default;

    console.log(name);
    console.log(subject);
    console.log(email);
    console.log(message);
    resetForm();
    
    axios({
        method:"post",
        url:"http://localhost:4000/sendmail",
        data:{
            name: name,
            subject:subject,
            email: email,
            message:message
        }
    }).then((response) =>(console.log(response.data)))
    .catch(error =>(console.log(error)));



}


const Contact = () => (
    <div className="contact"> 
        <h2>Contact Me!</h2>
        <form id="contact-form" className="contact-form" method="post" onSubmit={handleSubmit}>
            <TextInput name="name" text="Name:"/>
            <TextInput name="subject" text="Subject:"/>
            <TextInput name="email" text="Email:"/>            
            <label htmlFor="message">
                Message:
               <textarea required name="" id="message" cols="30" rows="10"></textarea>
            </label>
            <input type="submit" value="Send!"/>
        </form>
    </div>

)
export default Contact;