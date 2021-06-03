export default function ChangeSize(props) {
    return (
        <div className="change_size">
            <h2>Change Size</h2>
            <label>
                Height (px):
                <input 
                    type="number" 
                    name="height" 
                    placeholder="Enter a height" 
                    value={props.height} 
                    min="100"
                    max="1000"
                    onChange={(e) => props.set_height(e.target.value)} />
            </label>

            <label>
                Width (px):
                <input 
                    type="number" 
                    name="width" 
                    placeholder="Enter a width" 
                    value={props.width} 
                    min="100"
                    max="1000"
                    onChange={(e) => props.set_width(e.target.value)} />
            </label>
        </div>
    )
}