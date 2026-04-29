import "./ListaSuspensa.css"

function ListaSuspensa(props) {
    return (
        <div className='Lista-Suspensa'>

            <label>{props.label}</label>
<<<<<<< HEAD
            <select  onChange={ evento => props.aoAlterado(evento.target.value)}
             required={props.required} 
             value={props.value}> 
                                  
            {props.item.map((item) => {
                  return <option key={item}>{item}</option>                 
                })}   
=======
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                {props.item.map((item) => {
                    return <option key={item}>{item}</option>
                })}
>>>>>>> e66cafc (acrescentei os colaboradores)
            </select>
        </div>
    )
}
export default ListaSuspensa;