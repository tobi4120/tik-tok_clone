import { ChangeSizeDiv, Label, LabelName, SizeInput} from "../styles/change_size";
import { Header2 } from "../styles/headers";

export default function ChangeSize(props) {
    return (
        <ChangeSizeDiv name="change_size">
            <Header2>Change Size</Header2>

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