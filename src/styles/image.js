import styled from 'styled-components';

export const PictureDiv = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 20px;
`;

export const Picture = styled.img`
    border-radius: 10px;
    display: block;
    margin: auto;
    max-width: 400px;
    max-height: 400px;

    @media (max-width: 420px) {
        max-width: 300px;
    }
`;