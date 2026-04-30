import "./ListaSuspensa.css"

function ListaSuspensa(props) {

    const aoDigitar = (evento) => {
 props.aoAlterar(evento.target.value)

  }
    return (
        <div className='Lista-Suspensa'>

            <label>{props.label}</label>
            
            <select onChange={aoDigitar} > 
                              
            {props.item.map((item) => {
                  return <option key={item}>{item}</option> 
                                  
                })}
                   
            </select>
        </div>
    )
}
export default ListaSuspensa;