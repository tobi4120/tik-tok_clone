import styled from 'styled-components';

export const TikTok_logo = styled.img`
    width: 120px;
    height: 35px;
    padding: 10px 20px;
`;

export const Content = styled.div`
    padding: 15px;

    @media (max-width: 420px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Options = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;

    @media (min-width: 1100px) {
        div:first-child {
            margin-right: 20px;
        }
    }

    @media (max-width: 1100px) {
        display: block;
    }
`;