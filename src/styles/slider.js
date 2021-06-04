import styled from 'styled-components';
import theme from '../styles/theme';

export const ChangeSplit = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.fonts.primary};
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    padding: 20px;

    @media (max-width: 1100px) {
        margin: auto;
        margin-bottom: 30px;
        width: 70%;
    }

    @media (max-width: 415px) {
        width: 80%;
    }
`;

export const SplitInput = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.div`
    display: inline-block;
    width: 150px;
    text-align: center;

    @media (max-width: 520px) {
        width: 75px;
    }

    @media (max-width: 415px) {
        width: 25px;
    }

    @media (max-width: 320px) {
        width: 20px;
    }
`;

export const Name = styled.p `
    display: inline;
    
    &::after {
        content: ${props => props.placeKitten ? `"Place Kitten"`: `"Unsplash"`};
    }

    @media (max-width: 620px) {
        &::after {
            content: "";
        }
    }
`;

export const RangeInput = styled.input`
    -webkit-appearance: none;
    background-color: ${theme.colors.lightGrey};
    height: 7px;
    border-radius: 5px;
    margin: 0px 20px;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: ${theme.colors.cherryRed};
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-shadow: 0px 0px 2px 8px rgba(254, 44, 85, 0.2);
        cursor: pointer;
    }
`