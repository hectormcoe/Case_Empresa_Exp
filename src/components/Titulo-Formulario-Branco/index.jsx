import './titulo-formulario.css'

export function TituloFormularioBranco (titulo){
  return(
    <h2 className="titulo-form">
        {titulo.children}
    </h2>
  )
}
