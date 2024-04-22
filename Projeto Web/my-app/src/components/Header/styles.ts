import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;

    justify-content: center; /* Centralizar os botões horizontalmente */
    gap: 8rem; /* Espaçamento entre os botões */

    .minhaConta,
    .minhaEstante,
    .recs {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem; /* Adicionei padding horizontal */
        border-radius: 0.25rem;
        height: 2.5rem;
        transition: filter 0.2s;
        margin: 0 .5rem; /* Diminui o espaçamento entre os botões */
        margin-top: 10px;

        &:last-child {
            margin-right: 0; /* Remove o espaçamento do último botão */
        }

        &:not(:last-child) {
            margin-right: 1rem; /* Espaçamento entre os botões */
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

    .title {
        font-size: 2rem;
        color: #FFF;
        margin-left: -750px;
        width: 7%;
    }
`;

export const Content2 = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto; /* Empurra os conteúdos para a direita */
    gap: 1rem; /* Espaçamento entre o logo e o nome do site */
    
    img {
        width: 120px; /* Tamanho do logo ajustável */
        margin-top: -250px;
        margin-left: 80px;
    }

    span {
        font-size: 1.5rem; /* Tamanho ajustável */
        color: white; /* Cor do texto ajustável */
        margin-top: -250px;
    }
    
`





