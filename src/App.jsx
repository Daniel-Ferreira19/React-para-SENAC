import Banner from "./Banners/Banner";
import FormularioCompleto from "./Formulario/FormularioCompleto";
import "./App.css";
import { useState } from "react";

function App() {
  const [contratadores, setContratadores] = useState([]);

  const aoNovoCadastrante = (contratador) => {
    setContratadores([...contratadores, contratador]);
    console.log(contratador);
  };

  return (
    <div className="app">
      <Banner />
      <FormularioCompleto aoNovoCadastrante={aoNovoCadastrante} />
    </div>
  );
}

export default App;