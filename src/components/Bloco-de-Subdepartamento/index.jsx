import './Bloco-de-Subdepartamento.css'

{/*o bloquinho de subdepartamento em que ele lista o nome do subdepartamento (por enquanto)
    Posteriormente quero o número de funcionários e o número de vagas*/}
export function BlocoDeSubdepartamento({subdepartamento}){
    return(
        <div className='bloco-subdepartamento'>
            <h3>{subdepartamento.nome}</h3>
            <p>Funcionários: {subdepartamento.quantidadeFuncionarios}</p>
            <p>Vagas: {Math.max(0, 20 - subdepartamento.quantidadeFuncionarios)}</p>
        </div>
    )
}