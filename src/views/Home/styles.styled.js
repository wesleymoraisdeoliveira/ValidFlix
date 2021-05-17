import styled from 'styled-components';

export const Breathe = styled.div`
    padding: 0 0 1rem 0;
`

export const CardTall = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;
    padding: 0;
    margin: 0;
    grid-row: span 2 / auto;
    grid-column: span 2 / auto;

    img {
        height: 100%;
        width: 100%;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0 2rem;
`

export const Mosaic = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0 0 2rem 0;
`

export const Movie = styled.div`
    width: 160px;
    height: 280px;
    padding: 1rem;

    img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }

    &:first-child {
        padding-left: 0;
    }
`

export const Row = styled.div`
    display: flex;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 22px;
    padding: 0 0 1rem 0;
`