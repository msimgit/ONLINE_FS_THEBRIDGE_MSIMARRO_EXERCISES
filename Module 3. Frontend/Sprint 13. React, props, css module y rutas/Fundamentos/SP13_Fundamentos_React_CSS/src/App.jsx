import Card from "./components/Card/Card"

export default function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "0 20px" }}>
      <Card
        title="Plan Básico"
        description="Acceso a todos los contenidos del bootcamp."
      />
      <Card
        title="Plan Pro"
        description="Contenidos + mentoring personalizado + bolsa de empleo."
        featured
      />
      <Card
        title="Plan Empresa"
        description="Para equipos. Incluye licencias múltiples y soporte dedicado."
      />
    </div>
  )
}