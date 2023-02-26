import React from "react";
import Heading from "../../components/Heading/Heading";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="Contact">
      <Heading index="04" heading="Contact Me" />
      <section className="contact_section">
        <div className="contact_heading_1"></div>
        <h1 className="contact_heading_2">Get in touch</h1>
        <p className="contact_desc">
          <p>Mobile no: 9026590409</p>
          <p>Email : avermaav2002@gmail.com</p>
          <p>Address: Varanasi, UttarPradesh</p>
           {" "}
        </p>
        <a href="mailto:avermaav2002@gmail.com">
          <button className="contact_btn">say Hello</button>
        </a>
      </section>
    </section>
  );
};

export default Contact;
