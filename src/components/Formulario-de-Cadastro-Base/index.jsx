
import { TituloFormularioBranco } from '../Titulo-Formulario-Branco'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../Lista-Suspensa-Departamentos'
import { ListaSuspensaFuncionarios } from '../Lista-Suspensa-Funcionarios'
import './formulario-Cadastro.css'

export function FormularioDeCadastroBase({ departamentos, subdepartamentos, aoSubmeter  }) {
  
  function submissaoForm(formData) {
    const subdepartamento = {
      id: subdepartamentos.length + 1,
      nome: formData.get('nome'),
      departamentoId: Number(formData.get('departamento')),
      quantidadeFuncionarios: Number(formData.get('funcionarios'))
    }
    console.log('Subdepartamento cadastrado:', subdepartamento);
    aoSubmeter(subdepartamento);
  }

  return (
    <form className='formCadastro' action={submissaoForm}>
      <TituloFormularioBranco>Formulário:</TituloFormularioBranco>
      {/*A ideia é impedir o usuário de colocar valor errado, com mais tempo disponível gostaria de adicionar a possibilidade de pedido de deletar um subdepartamento criado, 
      mas só podendo deletar tendo um */ }
      <div className='campos-form-geral'>
        <fieldset className='campoform-linha'>
          <label className='label' htmlFor="nome">Nome do Subdepartamento:</label>
          <input className='campo-entrada-form' type="text" id='nome' name='nome' placeholder='Nome do Subdepartamento' required />
        </fieldset>
        <fieldset className='campoform-linha'>
          <label className='label' htmlFor="departamento">Departamento:</label>
          <ListaSuspensa id="departamento" name="departamento" departamentos={departamentos} />
        </fieldset>
        <fieldset className='campoform-linha'>
          <label className='label' htmlFor="funcionarios">Funcionários:</label>
          <ListaSuspensaFuncionarios id="funcionarios" name="funcionarios" />
        </fieldset>
      </div>
      <div className='acoes'><Botao texto="Cadastrar" type="submit" /></div>
    </form>
  )
}
