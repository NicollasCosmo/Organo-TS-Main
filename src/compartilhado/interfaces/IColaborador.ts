export interface IColaborador {
    nome: string
    cargo: string
    imagem: string
    time?: string // O time? significa que é opcional,o colaborador pode ter ou não um time.
    data: string
}