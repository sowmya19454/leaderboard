import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit= () => {
  alert("Thanks for contacting us")
  };
  return (
    <div className="page">
      <form className="contactform" onSubmit={handleSubmit}>
        <h1>ContactForm</h1>
                <div className="sameline">
                    <p>Name : </p>
                    <input type="text" id="name" placeholder=" name" />
                </div>
                <div className="sameline">
                    <p>Email :   </p>
                    <input type="email" id="email" placeholder=" Email"/>
                </div>
                <div className="sameline">
                    <p>Message: </p>
                    <input type="text" id="Mobile" placeholder=" Message" />
        </div>
        <button id="myButton">send</button>
        </form>
    </div>
   
  );
}

export default Contact;