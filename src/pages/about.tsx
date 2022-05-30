import React from "react";

import Layout from "../components/layouts/home-layout";
import Contact from "../components/sections/contact";
import SEO from "../components/seo";

import "../styles/about.scss";

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-route">
      <h1 className="section-title">About me</h1>
      <div className="about-cont">
        <h2>Background</h2>
        <p className="info">
          My name is Umid. I'm a self taught software developer turned Inha
          university student based in Tashkent. I found my passion for learning
          computer sciences at the age of 14 and have been programming ever
          since. I've dedicated countless hours to learning and expanding this
          passion. Being able to effectively teach myself is something I am most
          proud of about myself. I have developed an avid work ethic and
          disciplinary skills along my journey in life. Strong creative and
          critical thinking skills have helped me to excel in areas like web
          development as well as functional and object oriented programming. In
          free my time, I immerse myself in learning new programming
          technologies and how to better myself as a programmer but also find
          joy with meditaion, music, hiking, and spending time under the sun.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Inha University</p>
            <p>2018-2022</p>
          </li>
          <li>
            <p>Tashkent professional IT college</p>
            <p>2015-2018</p>
          </li>
        </ul>
        <h2>Experience</h2>
        <ul>
          <li>
            <p>Oqila</p>
            <p>Over 2 years</p>
            <p>
              Developed telegram-bots,mobile applications and websites using
              React,React-native and PHP
            </p>
          </li>
          <li>
            <p>Zetsoft</p>
            <p>Under 3 month</p>
            <p>Contributed to the project as a React developer</p>
          </li>
          <li>
            <p>Soliq.uz</p>
            <p>About 1.5 month</p>
            <p>Developed 3 projects as a React developer</p>
          </li>
          <li>
            <p>Epam</p>
            <p>About 1.5 month</p>
            <p>Worked as a NodeJs back-end developer</p>
          </li>
          <li>
            <p>Albison</p>
            <p>Since September 2021 until now</p>
            <p>Working as a Fullstack Javascript developer</p>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  </Layout>
);

export default About;
