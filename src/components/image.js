import { PictureDiv, Picture } from "../styles/image";

export default function Image(props) {
    console.log(props)
    return (
        <PictureDiv>
            <Picture src={props.image} />
        </PictureDiv>
    )
}