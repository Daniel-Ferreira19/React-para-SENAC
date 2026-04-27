import "./ComponentesTexto.css"

  let valor ='Daniel Ferreira'

function ComponentesTexto(props) {

const aoDigitar = (evento) => {
 valor = evento.target.value
 console.log(valor)
  }

    return (
     
        <div className="componentes-texto">
            <label  >{props.label}</label>
            <input  value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default ComponentesTexto;