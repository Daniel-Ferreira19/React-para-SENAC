import Banner from "./Banners/Banner";
import FormularioCompleto from "./Formulario/FormularioCompleto";
import "./App.css";
import { useState } from "react";

function App() {

  const [colaboradores, setColaborador] = useState([])

  const NovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }
  return (
    <div className="app">
      <Banner />
      <FormularioCompleto  aoColaborador={NovoColaborador} />       
    </div>
  )
}

export default App; 