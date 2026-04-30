import { useState } from "react";
import Botao from "../Botao/Botao";
import ComponentesTexto from "../componentesDeTexto/ComponentesTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./FormularioCompleto.css"

function FormularioCompleto () {

const times = [
       'programação',
        'Front-end',
        'Back-end',
        'UX e desing'
]

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('');
console.log(nome,cargo,imagem,time)

function aoSalvar (evento) {
evento.preventDefault()

}

    return (
        <section className="formulario"> 

            <form onSubmit={aoSalvar}>
               
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ComponentesTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"
                valor={nome}
                aoAlterar={valor => setNome(valor)}         />
                
                <ComponentesTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" 
                valor={cargo}
                aoAlterar={valor => setCargo(valor)} />

                <ComponentesTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterar={valor => setImagem(valor)} />

                <ListaSuspensa   obrigatorio={true} label="Time" item={times}
                valor={time}
                aoAlterar={valor => setTime(valor)}/>
             

                <Botao>

                    criar card

                </Botao>

            </form>
        </section>
    )
}

export default FormularioCompleto;
