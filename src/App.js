import "./index.css";
import "boxicons";
import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="main-content">
      <h1>Home</h1>
      <p>Welcome home!</p>
    </div>
  );
}

function Introduction() {
  return (
    <div className="main-content">
      <h1>Introduction</h1>
      <p>Introduce our Company</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Main Content</h1>
      <p>Introduce our Product</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="main-content">
      <h1>Contact</h1>
      <p>Contact with our Company</p>
    </div>
  );
}

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <i class="bx bxl-digitalocean"></i>
        <h1 id="logo-text">OceanGallery</h1>
      </div>
      <ul className="header">
        <li>
          <NavLink className="link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/introduction">
            Introduction
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/MainContent">
            Main Content
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  const handleClick = () => {
    const show = document.getElementById("goo");
    show.classList.toggle("active");
  };
  const handleEmailClick = () => {
    const email = document.getElementById("email");
    email.classList.toggle("active");
  };
  return (
    <div className="footer">
      <div className="visitor">
        <h1>현재까지 방문한 사람</h1>
        <p>200</p>
      </div>
      <div className="developer-info">
        <div className="info">
          <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>운영정책</li>
            <li>Contact us</li>
            <li id="goo" onClick={handleClick}>
              클릭해도 아무것도 안나옵니다.
            </li>
          </ul>
        </div>
        <div className="mail">
          <p id="foo" onClick={handleEmailClick}>
            개발자 이메일 확인하기
          </p>
          <p id="email">iop789007@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div
        id="line-top"
        style={{
          borderTop: "2px solid #e7e9eb ",
        }}
      ></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/introduction">
          <Introduction />
        </Route>
        <Route path="/MainContent">
          <MainContent />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">404 page Not found</Route>
      </Switch>
      <div
        id="line-bottom"
        style={{
          borderTop: "2px solid #e7e9eb ",
        }}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
