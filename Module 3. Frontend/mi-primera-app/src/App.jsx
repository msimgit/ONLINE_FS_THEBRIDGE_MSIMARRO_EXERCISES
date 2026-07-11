import React from 'react';
import { useState } from "react";

function Header() {
  return (
    <header style={{ background: '#EF3340', color: 'white', padding: '16px' }}>
      <h1>Mi primera app React</h1>
    </header>
  )
}

function Card() {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px' }}>
      <h2>React es declarativo</h2>
      <p>Describes cómo debe verse la UI. React hace el resto.</p>
    </div>
  )
}

function Footer() {
  return <footer style={{ textAlign: 'center', padding: '12px', color: '#767171' }}>The Bridge © 2025</footer>
}

export default function App() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}