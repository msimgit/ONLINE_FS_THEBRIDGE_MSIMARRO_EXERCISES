import { Outlet, Link, NavLink } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <nav style={{ display:"flex", gap:"16px", padding:"16px", background:"#111" }}>
        <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? "#EF3340" : "#fff"
            })}
            >Home</NavLink>
        <Link to="/about"      style={{ color:"#fff" }}>About</Link>
        <Link to="/dashboard"  style={{ color:"#fff" }}>Dashboard</Link>
      </nav>
      <main style={{ padding:"32px" }}>
        <Outlet/>
      </main>
    </>
  )
}