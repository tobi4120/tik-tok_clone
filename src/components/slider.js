import { Header2 } from "../styles/headers";
import { ChangeSplit, SplitInput, Label, Name, RangeInput} from "../styles/slider.js"

export default function Slider(props) {
    return (
        <ChangeSplit>
            <Header2>Change Split</Header2>

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