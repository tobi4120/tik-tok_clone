import styled from 'styled-components';
import theme from '../styles/theme';

export const ChangeSizeDiv = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.fonts.primary};
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    padding: 20px;

    label:first-of-type > p:first-of-type {
        margin-bottom: 10px;
    }

    @media (max-width: 1100px) {
        margin: auto;
        width: 70%;
    }

    @media (max-width: 415px) {
        width: 80%;

        p {
            margin-bottom: 5px;
        }

        label:first-of-type > input:first-of-type {
            margin-bottom: 20px;
        }
    }
`;

export const Label = styled.label`
@media (max-width: 415px) {
    display: inline-block;
    text-align: center;

    input {
        text-align: center;
    }
}
`

export const LabelName = styled.p`
    display: inline-block;
    width: 100px;
    margin: 0;
`

export const SizeInput = styled.input`
    border: none;
    border-bottom: 2px solid #e9edfa;

    &:focus {
        outline: none;
        border-bottom: 2px solid ${theme.colors.cherryRed};
    }
`