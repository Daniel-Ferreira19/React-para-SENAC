import "./ListaSuspensa.css"

function ListaSuspensa(props) {
    return (
        <div className='Lista-Suspensa'>

            <label>{props.label}</label>
            <select>                      
            {props.item.map((item) => {
                  return <option key={item}>{item}</option>                 
                })}   
            </select>
        </div>
    )
}
export default ListaSuspensa;