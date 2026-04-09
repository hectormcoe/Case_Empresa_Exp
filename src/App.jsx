import { use, useState } from 'react'
import { FormularioDeCadastroBase } from './components/Formulario-de-Cadastro-Base'
import { TituloFormularioBranco } from './components/Titulo-Formulario-Branco'
import { Botao } from './components/Botao'
import { BlocoDeSubdepartamento } from './components/Bloco-de-Subdepartamento'
import './App.css'
import { Banner } from './components/Banner'


function App() {
  {/*Aqui, como não tem backend, vou criar uma estrutura de departamentos e subdepartamentos para simular. Mas sem um backend real, os dados não permancerão e serão redefinidos, infelizmente a cada recarga da página.*/ }
  const departamentos = [
    { id: 1, nome: 'Departamento de Recursos Humanos'},
    { id: 2, nome: 'Departamento de Marketing'},
    { id: 3, nome: 'Departamento de Tecnologia da Informação'},
    { id: 4, nome: 'Departamento de Finanças'},
    { id: 5, nome: 'Departamento de Vendas'}
  ]
 const subdep = [
    { id: 1, nome: 'Recrutamento', departamentoId: 1, quantidadeFuncionarios: 10 },
    { id: 2, nome: 'Treinamento', departamentoId: 1, quantidadeFuncionarios: 8 },
    { id: 3, nome: 'Publicidade', departamentoId: 2, quantidadeFuncionarios: 12 },
    { id: 4, nome: 'Redes Sociais', departamentoId: 2, quantidadeFuncionarios: 5 },
    { id: 5, nome: 'Suporte Técnico', departamentoId: 3, quantidadeFuncionarios: 15 },
    { id: 6, nome: 'Desenvolvimento de Software', departamentoId: 3, quantidadeFuncionarios: 20 },
    { id: 7, nome: 'Contabilidade', departamentoId: 4, quantidadeFuncionarios: 7 },
    { id: 8, nome: 'Planejamento Financeiro', departamentoId: 4, quantidadeFuncionarios: 6 },
    { id: 9, nome: 'Vendas Internas', departamentoId: 5, quantidadeFuncionarios: 18 },
    { id: 10, nome: 'Vendas Externas', departamentoId: 5, quantidadeFuncionarios: 20 },
    { id: 11, nome: 'Análise de Dados', departamentoId: 3, quantidadeFuncionarios: 9 },
    { id: 12, nome: 'Segurança da Informação', departamentoId: 3, quantidadeFuncionarios: 4 },
    { id: 13, nome: 'Relações Públicas', departamentoId: 2, quantidadeFuncionarios: 11 },
    { id: 14, nome: 'Benefícios', departamentoId: 1, quantidadeFuncionarios: 6 },
    { id: 15, nome: 'Comunicação Interna', departamentoId: 1, quantidadeFuncionarios: 5 }
  ]

  const [subdepartamentos, setSubdepartamentos] = useState(subdep)

  function adicionarSubdepartamento(subdpt) {
    setSubdepartamentos([...subdepartamentos, subdpt]);
    console.log('Subdepartamento adicionado:', subdpt);
  }

  return (
    <main>
      <header>
        <img src="../public/logo.png" alt="Logo da empresa" />
      </header>

      <Banner/>

      <section className='head-form'>
        <TituloFormularioBranco>Cadastro de Subdepartamento</TituloFormularioBranco>
      </section>
      {/*Aqui eu passo o aoSubmeter, uma função com parâmetro como parâmetro, particularidade de JavaScript*/ }
      <FormularioDeCadastroBase departamentos={departamentos} subdepartamentos={subdepartamentos} aoSubmeter={adicionarSubdepartamento}/>

      {/*Aqui será uma organização visual de departamento em departamento, cada um com seus blocos de subdepartamento
      A função key serve para o DOM saber o que ta mudando, mas ainda achei confuso onde colocar*/}
      {departamentos.map((departamento) => (
        <section key={departamento.id} className="titulo-bloco" >
          <div className='departameto'>
            <TituloFormularioBranco>{departamento.nome}</TituloFormularioBranco>
            <div>
              <h4>Subdepartamentos: {subdepartamentos.filter(sd => sd.departamentoId === departamento.id).length}</h4>
              <h4>Funcionários: {subdepartamentos.filter(sd => sd.departamentoId === departamento.id).reduce((total, sd) => total + sd.quantidadeFuncionarios, 0)}, Vagas Disponíveis: {subdepartamentos.filter(sd => sd.departamentoId === departamento.id).reduce((total, sd) => total + Math.max(0, 20 - sd.quantidadeFuncionarios), 0)}</h4>
            </div>
          </div>

          
            <ol>
            {subdepartamentos
              .filter((sd) => sd.departamentoId === departamento.id)
              .map((subdepartamento) => (
                <li key={subdepartamento.id}><BlocoDeSubdepartamento subdepartamento={subdepartamento} /></li>
              ))}
          </ol>
          
        </section>
      ))}
      
    </main>
  )
}

export default App
