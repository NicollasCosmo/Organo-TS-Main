import { ReactElement } from 'react'
import './Botao.css'
import React from 'react';

interface BotaoProps {
    children: ReactElement | string // Pode ser um ReactElement ou string, o que vier será aceito.
}

const Botao = (props: BotaoProps) => {
    return (<button className='botao'>
        {props.children }
    </button>)
}

export default Botao