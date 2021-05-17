import styled from 'styled-components';

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