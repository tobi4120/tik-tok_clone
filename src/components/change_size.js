import styled from 'styled-components';

// Styles
const ChangeSizeDiv = styled.div` 
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
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

const Header = styled.h2`
    color: rgba(254, 44, 85, 1.0);
    margin-top: 10px;
`

const Label = styled.label`
@media (max-width: 415px) {
    display: inline-block;
    text-align: center;

    input {
        text-align: center;
    }
}
`

const LabelName = styled.p`
    display: inline-block;
    width: 100px;
    margin: 0;
`

const SizeInput = styled.input`
    border: none;
    border-bottom: 2px solid #e9edfa;

    &:focus {
        outline: none;
        border-bottom: 2px solid rgba(254, 44, 85, 1.0);
    }
`

export default function ChangeSize(props) {
    return (
        <ChangeSizeDiv name="change_size">
            <Header>Change Size</Header>

            <form>
                <Label>
                    <LabelName>Height (px):</LabelName>
                    <SizeInput
                        type="number" 
                        name="height" 
                        placeholder="Enter a height" 
                        value={props.height} 
                        onChange={(e) => props.set_height(e.target.value)} />
                </Label>
                <br />

                <Label>
                    <LabelName>Width (px):</LabelName>
                    <SizeInput 
                        type="number" 
                        name="width" 
                        placeholder="Enter a width" 
                        value={props.width} 
                        onChange={(e) => props.set_width(e.target.value)} />
                </Label>
            </form>
        </ChangeSizeDiv>
    )
}