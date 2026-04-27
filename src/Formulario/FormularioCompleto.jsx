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

function aoSalvar (evento) {
evento.preventDefault()

}

    return (
        <section className="formulario"> 

            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ComponentesTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <ComponentesTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <ComponentesTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa   obrigatorio={true} label="Time" item={times}/>
                <Botao>

                    criar card

                </Botao>

            </form>
        </section>
    )
}

export default FormularioCompleto;
