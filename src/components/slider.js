export default function Slider(props) {
    return (
        <div className="slider">
            <h2>Change Split</h2>
            <p>Place Kitten: {Math.round(100-props.split*100)}%</p>
            <input 
                name="slider"
                type="range" 
                onChange={(e) => props.set_split((e.target.value)/100)} 
                value={props.split*100} 
                min="0" 
                max="100" />
            <p>Unsplash: {Math.round(props.split*100)}%</p>
        </div>
    )
}