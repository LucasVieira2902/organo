import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.opcoes.map((opcao) => { 
                    return <option key={opcao}>{opcao}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa