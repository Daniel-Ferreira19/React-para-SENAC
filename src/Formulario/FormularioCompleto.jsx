import { useState } from "react";
import Botao from "../Botao/Botao";
import ComponentesTexto from "../componentesDeTexto/ComponentesTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./FormularioCompleto.css"

function FormularioCompleto (props) {

const times = [
      "programador",
      "fornt-end",
      "back-end",
      "UX e IX"

]

<<<<<<< HEAD

const [nome, setNome] = useState('');
=======
const [nome, setNome] = useState('daniel');
>>>>>>> e66cafc (acrescentei os colaboradores)
const [cargo, setCargo] = useState('');
const [imagem, setImagem] = useState('');
const [time, setTime] = useState('');


function aoSalvar (evento) {
evento.preventDefault()
<<<<<<< HEAD
props.aoNovoCadastrante({
  nome,
  cargo,
  imagem,
  time
})

=======
props.aoColaborador({
    nome,
    cargo,
    imagem,
    time
})
>>>>>>> e66cafc (acrescentei os colaboradores)
}

    return (
        <section className="formulario"> 

            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ComponentesTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" 
                   valor={nome}
                   aoAlterado={valor => setNome(valor)}  />
                 
                <ComponentesTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"
                   valor={cargo}
                   aoAlterado={valor => setCargo(valor)} />

                <ComponentesTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" 
                   valor={imagem}
                   aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa 
                  obrigatorio={true}
                   label="Time"
                    item={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />

                <Botao>

                    criar card

                </Botao>

            </form>
        </section>
       
    )
    
}

export default FormularioCompleto;
