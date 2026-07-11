import { Outlet, NavLink } from "react-router-dom"

// NavLink recibe una función en style para aplicar estilos condicionales
<NavLink
  to="/"
  style={({ isActive }) => ({
    color: isActive ? "#EF3340" : "#fff"
  })}
>Home</NavLink>