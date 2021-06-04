import styled from 'styled-components';

// Styles
const PictureDiv = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 20px;
`;

const Picture = styled.img`
    border-radius: 10px;
    display: block;
    margin: auto;
    max-width: 400px;
    max-height: 400px;

    @media (max-width: 420px) {
        max-width: 300px;
    }
`;

export default function Image(props) {
    return (
        <PictureDiv>
            <Picture src={props.image} />
            <p>{props.re_render}</p>
        </PictureDiv>
    )
}