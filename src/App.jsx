import Banner from "./Banners/Banner";
import FormularioCompleto from "./Formulario/FormularioCompleto";
import "./App.css";
import { useState } from "react";

function App() {
<<<<<<< HEAD
<h1> projeto antigo</h1>
  const [contratadores, setContratadores] = useState([]);

  const aoNovoCadastrante = (contratador) => {
    setContratadores([...contratadores, contratador]);
    console.log(contratador);
  };

  return (
    <div className="app">
      <Banner />
      <FormularioCompleto aoNovoCadastrante={aoNovoCadastrante} />
=======

  const [colaboradores, setColaborador] = useState([])

  const NovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }
  return (
    <div className="app">
      <Banner />
      <FormularioCompleto  aoColaborador={colaborador => NovoColaborador(colaborador)} />
        <h1> projeto atual, com atualizações no (NovoColaborador)</h1>
>>>>>>> e66cafc (acrescentei os colaboradores)
    </div>
  );
}

export default App;