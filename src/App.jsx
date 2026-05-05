import { useState } from "react";
import Banner from "./Banners/Banner";
import FormularioCompleto from "./Formulario/FormularioCompleto";
import Time from "./Time/Time";
import "./App.css";

function App() {

  const times = [
    {
      nome: 'programador',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'front-end',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'back-end',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {


      nome: 'UX e IX',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'Data-science',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba85',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const NovoColaborador = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])
    console.log(setColaboradores)
  }
  return (
    <div className="app">
      <Banner />
      <FormularioCompleto times={times.map(time => time.nome)} aoColaborador={NovoColaborador} />

      {times.map(time => <Time key={time.nome} nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        //colocamos o .filter(), ele filtra cada elemento que desejar.
        colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}

      />)}

    </div>
  )
}

export default App; 