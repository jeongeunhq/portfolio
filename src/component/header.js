import React from 'react';
import '../css/header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">EunHa</h1>
      <nav className="nav">
        <a href="#profile">{'About'}</a> 
        <a href="#skills">{'Skills'}</a>
        <a href="#project">{'Project'}</a>
        <a href="#award">{'Contact'}</a>
      </nav>
    </header>
  );
}

export default Header;
