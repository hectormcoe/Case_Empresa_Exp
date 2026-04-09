import './botao.css'
{/* lembrando a utilização do parâmetro de texto como "quebrado" */}
{/* botão reutilizável e padronizado*/}
export function Botao({texto}){
    return(
        <button className='botao'>{texto}</button>
    )
}