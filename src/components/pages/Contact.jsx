import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    //e.preventDefault is allow us  to refresh the page
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      return;
    }

    if (!message) {
      setErrorMessage(`Please type a message, ${userName}`);
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
    alert(`Message sent by ${userName}`);
  };

  return (
    <div className="container text-center">
      <h1>Contact Page</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text" // Set the input type to 'message'
            className="form-control"
            placeholder="Enter your message" // Specify a placeholder for the message input
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
