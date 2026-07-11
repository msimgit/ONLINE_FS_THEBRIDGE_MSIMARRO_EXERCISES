import React from 'react';
import PropTypes from "prop-types";
import Card from "./components/Card/Card";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// function Header() {
//   return (
//     <header style={{ background: '#EF3340', color: 'white', padding: '16px' }}>
//       <h1>Mi primera app React</h1>
//     </header>
//   )
// }

// function Card() {
//   return (
//     <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', margin: '20px' }}>
//       <h2>React es declarativo</h2>
//       <p>Describes cómo debe verse la UI. React hace el resto.</p>
//     </div>
//   )
// }

// function Footer() {
//   return <footer style={{ textAlign: 'center', padding: '12px', color: '#767171' }}>The Bridge © 2025</footer>
// }

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Card />
//       <Footer />
//     </>
//   )
// }

// const products = [
//   { id: 1, name: "Laptop Pro",    price: 1200, inStock: true  },
//   { id: 2, name: "Smartphone X", price: 800,  inStock: true  },
//   { id: 3, name: "Tablet S",     price: 500,  inStock: false },
// ]

// function ProductCard({ name, price, inStock = true }) {
//   return (
//     <div style={{
//       border: "1px solid #E2E2E2", borderRadius: "8px",
//       padding: "20px", marginBottom: "12px",
//       opacity: inStock ? 1 : 0.5
//     }}>
//       <h3>{name}</h3>
//       <p>{price}€</p>
//       <span>{inStock ? "✅ En stock" : "❌ Agotado"}</span>
//     </div>
//   )
// }

// ProductCard.propTypes = {
//   name:    PropTypes.string.isRequired,
//   price:   PropTypes.number.isRequired,
//   inStock: PropTypes.bool,
// }

// export default function App() {
//   return (
//     <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
//       <h1>Catálogo</h1>
//       {products.map(p => (
//         <ProductCard key={p.id} {...p} name={p.name} />
//       ))}
//     </div>
//   )
// }

// function ProductCard({ name, price, inStock = true, onBuy }) {
//   return (
//     <div style={{
//       border: "1px solid #E2E2E2", borderRadius: "8px",
//       padding: "20px", marginBottom: "12px",
//       opacity: inStock ? 1 : 0.5
//     }}>
//       <h3>{name}</h3>
//       <p>{price}€</p>
//       <span>{inStock ? "✅ En stock" : "❌ Agotado"}</span>
//       <br />
//       <button onClick={onBuy} disabled={!inStock} style={{ marginTop: "10px" }}>
//         Comprar
//       </button>
//     </div>
//   )
// }

// ProductCard.propTypes = {
//   name:    PropTypes.string.isRequired,
//   price:   PropTypes.number.isRequired,
//   inStock: PropTypes.bool,
//   onBuy:   PropTypes.func,
// }

// export default function App() {
//   return (
//     <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
//       <h1>Catálogo</h1>
//       {products.map(p => (
//         <ProductCard key={p.id} {...p} onBuy={() => alert(p.name)} />
//       ))}
//     </div>
//   )
// }

// export default function App() {
//   return (
//     <div style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px" }}>
//       <Card
//         title="Plan Básico"
//         description="Acceso a todos los contenidos del bootcamp."
//       />
//       <Card
//         title="Plan Pro"
//         description="Contenidos + mentoring personalizado + bolsa de empleo."
//         featured
//       />
//       <Card
//         title="Plan Empresa"
//         description="Para equipos. Incluye licencias múltiples y soporte dedicado."
//       />
//     </div>
//   )
// }


import Layout    from "./Layout"
import Home      from "./pages/Home"
import About     from "./pages/About"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    { index: true,         element: <Home/>      },
    { path: "about",      element: <About/>     },
    { path: "dashboard",  element: <Dashboard/> },
    { path: "*",          element: <h2>404</h2>    },
  ]
}])

export default function App() {
  return <RouterProvider router={router} />
}