import styled from 'styled-components';

// Styles
const ChangeSplit = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
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

const Header = styled.h2 `
    color: rgba(254, 44, 85, 1.0);
    margin-top: 10px;
`

const SplitInput = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.div`
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

const Name = styled.p `
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

const RangeInput = styled.input`
    -webkit-appearance: none;
    background-color: #e9edfa;
    height: 7px;
    border-radius: 5px;
    margin: 0px 20px;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: rgba(254, 44, 85, 1.0);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-shadow: 0px 0px 2px 8px rgba(254, 44, 85, 0.2);
        cursor: pointer;
    }
`

export default function Slider(props) {
    return (
        <ChangeSplit>
            <Header>Change Split</Header>

            <SplitInput>
                <Label><Name placeKitten></Name> {Math.round(100-props.split*100)}%</Label>
                <RangeInput
                    name="slider"
                    type="range" 
                    onChange={(e) => props.set_split((e.target.value)/100)} 
                    value={props.split*100} 
                    min="0" 
                    max="100" />
                <Label><Name /> {Math.round(props.split*100)}%</Label>
            </SplitInput>
        </ChangeSplit>
    )
}