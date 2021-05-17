import styled from 'styled-components';

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 1rem;
    width: 35px;
    height: 35px;
    border-radius: 100%;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    padding: 0 0 0 2rem;

    a {
        padding: 0 .5rem;
        font-size: 14px;
        font-weight: 500;
        transition: .4s ease-in-out;
        color: #FFFFFF;

        &:hover {
            color: red;
            transition: .4s ease-in-out;
        }
    }
`

export const Navegation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    background: rgba(0,0,0,.5);
    z-index: 9;
    
`
export const Title = styled.h1`
    color: red;

    img {
        width: 100px;
        margin: 0 .2rem 0 0;
    }
`
