import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content, Content2, Content3 } from './styles'

interface HeaderProps {
    onOpenUserModal: () => void;
}

export function Header({ onOpenUserModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="biblio" />
                <span className='title'>biblio</span>
                <button className='minhaConta' type="button" onClick={onOpenUserModal}>
                    Minha conta
                </button>
            </Content>
            <Content2>
                <button className='recs' type="button">
                    Recomendações
                </button>
            </Content2>
            <Content3>
                <button className='minhaEstante' type="button">
                    Minha estante
                </button>
            </Content3>
        </Container>
    )
}