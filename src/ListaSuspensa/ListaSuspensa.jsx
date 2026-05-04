import "./ListaSuspensa.css"

function ListaSuspensa(props) {
    return (
        <div className='Lista-Suspensa'>

            <label>{props.label}</label>
            <select  onChange={ evento => props.aoAlterado(evento.target.value)}
             required={props.obrigatorio} 
             value={props.value}> 
                                  
            {props.item.map((item) => {
                  return <option key={item}>{item}</option>                 
                })}   

            </select>
        </div>
    )
}
export default ListaSuspensa;