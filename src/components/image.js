import { PictureDiv, Picture } from "../styles/image";

export default function Image(props) {
    return (
        <PictureDiv>
            <Picture src={props.image} />
            <p>{props.re_render}</p>
        </PictureDiv>
    )
}