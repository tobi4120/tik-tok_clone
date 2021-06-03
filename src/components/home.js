import { useEffect, useState, useRef } from "react";
import Image from  "../components/image";

export default function Home() {
    const [photoURL, set_photoURL] = useState();
    const [split, _set_split] = useState(0.5);
    const [height, _set_height] = useState("");
    const [width, _set_width] = useState("");
    const [startY, _set_startY] = useState();
    const [touchMove, _set_touchMove] = useState();
    let [count, set_count] = useState(0);

    // Refs
    const splitRef = useRef(split);
    const heightRef = useRef(height);
    const widthRef = useRef(width);
    const startYRef = useRef(startY);
    const touchMoveRef = useRef(touchMove);

    // Update split ref 
    const set_split = data => {
        splitRef.current = data; 
        _set_split(data);
    };

    // Update height ref 
    const set_height = data => {
        heightRef.current = data; 
        _set_height(data);
    };

    // Update width ref 
    const set_width = data => {
        widthRef.current = data; 
        _set_width(data);
    };

    // Update startY ref
    const set_startY = data => {
        startYRef.current = data;
        _set_startY(data);
    }

    // Update touchMove ref
    const set_touchMove = data => {
        touchMoveRef.current = data;
        _set_touchMove(data);
    }

    useEffect(() => {
        // Get a random photo and store the URL in a useState variable
        set_photoURL(get_photo());

        // Add event listener to listen when the user clicks a key on the keyboard
        window.addEventListener('keydown', handleKeyDown);

        // Add mouse event listeners (for swiping functionality)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        // Add touch event listeners (for mobile swipe functionality)
        window.addEventListener('touchstart', handleMouseDown)
        window.addEventListener('touchmove', handleTouchMove)
        window.addEventListener('touchend', handleMouseUp)

        // Remove listeners
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleKeyDown);
            window.removeEventListener('mouseup', handleKeyDown);
        };

    }, []);

    // Function to get a random photo
    const get_photo = () => {
        const max = 700
        const min = 200 
        const height = heightRef.current
        const width = widthRef.current

        // Check if height and with (if specified by user) is between 100 and 1000
        if (width && height) {
            if ((width < 100 || width > 1000) || (height < 100 || height > 1000)) {
                alert("Width and Height must be between 100 and 1000 pixels.")

                set_height("");
                set_width("");
            }
        }

        // Get a random num 
        const rand_num = Math.random()

        if (rand_num > splitRef.current) {
            if (height && width) {
                return `https://placekitten.com/${width}/${height}`;
            }
            return `https://placekitten.com/${Math.round(Math.random() * (max - min) + min)}/${Math.round(Math.random() * (max - min) + min)}`
        }
        else {
            set_count(count++)

            if (height && width) {
                return `https://source.unsplash.com/random/${width}x${height}?${count}`;
            }
            return `https://source.unsplash.com/random?${count}`;
        }
    }

    // Event listener for 'up' arrow key
    const handleKeyDown = (event) => {
        if (event.keyCode === 38) {

            // Get a random photo
            set_photoURL(get_photo());
        }
    };

    // Event listener for mouse down key
    const handleMouseDown = (event) => {
        set_startY(event.clientY || event.touches[0].clientY)
    }

    // Event listener for mouse up key
    const handleMouseUp = (event) => {

        // If client is using slider, do not consider this a "swipe" gesture
        if (event.srcElement.name === "slider") return

        if (event.clientY < startYRef.current || touchMoveRef.current < startYRef.current) {
            
            // Get a random photo
            set_photoURL(get_photo());

            // Clear startY ref
            set_startY(null)
        }
    }

    // Event listner for touch move
    const handleTouchMove = (event) => {
        set_touchMove(event.changedTouches[0].clientY)
    }

    return (
        <div>
            <Image image={photoURL} />
            
            <div className="slider">
                <h2>Change Split</h2>
                <p>Place Kitten: {Math.round(100-split*100)}%</p>
                <input 
                    name="slider"
                    type="range" 
                    onChange={(e) => set_split((e.target.value)/100)} 
                    value={split*100} 
                    min="0" 
                    max="100" />
                <p>Unsplash: {Math.round(split*100)}%</p>
            </div>

            <div className="change_size">
                <h2>Change Size</h2>
                <label>
                    Height (px):
                    <input 
                        type="number" 
                        name="height" 
                        placeholder="Enter a height" 
                        value={height} 
                        min="100"
                        max="1000"
                        onChange={(e) => set_height(e.target.value)} />
                </label>

                <label>
                    Width (px):
                    <input 
                        type="number" 
                        name="width" 
                        placeholder="Enter a width" 
                        value={width} 
                        min="100"
                        max="1000"
                        onChange={(e) => set_width(e.target.value)} />
                </label>
            </div>
        </div>
    )
}