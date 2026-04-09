import "./Lista-Suspensa-Departamentos.css"
{/*Esta é uma função para fazer uma lista de departamentos para dar um novo subdepartamento
    o depart é pra não confundir*/}
export function ListaSuspensa({departamentos}) {
    return(
        <select name="departamento" className='lista-suspensa-form' required>
            <option value="" disabled>Selecione uma opção</option>
            {departamentos.map(function(depart) {
                return (
                    <option key={depart.id} value={depart.id}>
                        {depart.nome}
                    </option>
                );
            })}
        </select>
    )
}