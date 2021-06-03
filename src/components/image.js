export default function Image(props) {
    return (
        <div>
            <img src={props.image} />
            <p>{props.re_render}</p>
        </div>
    )
}