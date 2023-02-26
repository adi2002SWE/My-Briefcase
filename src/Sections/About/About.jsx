import React from "react";
import Heading from "../../components/Heading/Heading";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <Heading index="01" heading="About Me" />
      <div className="about_container">
        <div className="about_left">
          <p className="about_desc">
            {" "}
            An innovative thinker, initiative taker and multi dimensional professional with exceptional and logical skills. I have demonstrated high
             levels of work ethic to achieve my predicted grades. Now wants to obtain a challenging position in software engineering.
          </p>
          <p className="about_desc">
            {" "}
            I am Aditya verma. I am from Varanasi, Uttarpradesh. I completed my schooling from
            B.N.S. School, Kursato, Chuakhandi, Varanasi.
            Currently, I am pursuing my Bachelor's of Technology in Computer Science & Engineering from Lovely professional University, Jalandhar, Punjab. 
            My short-term goal is to complete my college studies and get placed in a reputed IT company.
            My long-term goal is to become a successful software engineer with maximum experience.
            My strengths are I am a smart-worker, self-motivated and punctual.
            My hobbies are playing video games, playing chess, and Online Competetive Exam.
            I am interested in Cloud computing and Machine Learning.

          </p>
        </div>

        <div className="about_right">
        <img className="about_profile_img" src={require('./Pro-pho.jpg')} alt="ClickMe" />

          <div className="about_img_border" />
        </div>
      </div>
    </section>
  );
};

export default About;
