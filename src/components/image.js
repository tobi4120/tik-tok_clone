export default function Image(props) {
    console.log(props.image)
    return (
        <div>
            <img src={props.image} />
        </div>
    )
}