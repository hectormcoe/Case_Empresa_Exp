import './Lista-Suspensa-Funcionarios.css'
{/*Esta é uma função para fazer uma lista de números de 1 a 20*/}
export function ListaSuspensaFuncionarios() {
    return(
        <select name="funcionarios" className='lista-suspensa-form' required>
            <option value="" disabled >Selecione uma opção</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                    {num}
                </option>
            ))}
        </select>
    )
}
