import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void   // aoAlterado é uma função void (sem tipo) que recebe uma string como parâmetro
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean // obrigatorio? quer dizer que ele é opcional
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
                <input 
                    value={valor} 
                    onChange={aoDigitado} 
                    required={obrigatorio} 
                    placeholder={placeholderModificada}
                    type={tipo}
                />
        </div>
    )
}

export default CampoTexto