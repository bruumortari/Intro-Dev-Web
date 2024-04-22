import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content, Content2 } from './styles'

interface HeaderProps {
    onOpenUserModal: () => void;
}

export function Header({ onOpenUserModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <button className='recs' type="button">
                    Recomendações
                </button>
                <button className='minhaEstante' type="button">
                    Minha estante
                </button>
                <button className='minhaConta' type="button" onClick={onOpenUserModal}>
                    Minha conta
                </button>
                </Content>
                <Content2>
                <img src={logoImg} alt="biblio" />
                <span className='title'>biblio</span>
                </Content2>
        </Container>
    )
}
