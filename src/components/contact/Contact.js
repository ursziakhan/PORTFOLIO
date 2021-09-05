import "./contact.scss";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bodytext, setBodytext] = useState("");
  const [submit, setSendMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendMessage(true);

    emailjs
      .sendForm(
        "service_c9mfyo4",
        "template_vu7gxn8",
        e.target,
        "user_W6TkmVTg78hsYDkmw3sfx"
      )
      .then((res) => {
        setSendMessage(false);

        setName("");
        setEmail("");
        setBodytext("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="headertext">
        <h2 className="contactH1">Contact</h2>
      </div>
      <div id="form-div">
        <form onSubmit={handleSubmit} class="form" id="form1">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            name="name"
            type="text"
            className=" feedback-input"
            placeholder="Name"
            id="name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            name="email"
            value={email}
            type="text"
            required
            className="feedback-input"
            id="email"
            placeholder="Email"
          />

          <textarea
            className="text"
            onChange={(e) => setBodytext(e.target.value)}
            name="text"
            className=" feedback-input"
            id="comment"
            value={bodytext}
            placeholder="Message"
            required
          />

          <button className="btn1" type="submit" value={submit}>
            {submit ? "Sending..." : "Send"}
          </button>
          {submit ? "thanks for your Message" : ""}
        </form>
      </div>

      <div className="copy">
        <p>Copyright © 2021 Ziaullah Sahibzada</p>
      </div>
    </div>
  );
}
