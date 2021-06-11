import { useEffect, useState, useRef } from "react";
import Image from  "../components/image";
import Slider from "../components/slider";
import ChangeSize from "../components/change_size";
import tikTok_logo from "../assets/tik-tok-logo.png";
import { TikTok_logo, Content, Options } from "../styles/home";

export default function Home() {
    const [photoURL, set_photoURL] = useState();
    const [split, _set_split] = useState(0.5);
    const [height, _set_height] = useState("");
    const [width, _set_width] = useState("");
    const [startY, _set_startY] = useState();
    const [touchMove, _set_touchMove] = useState();
    let [count, set_count] = useState(0);
    const placeKitten_url = "https://placekitten.com";
    const unsplash_url = "https://source.unsplash.com/random";

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
            window.removeEventListener('touchstart', handleKeyDown);
            window.removeEventListener('touchmove', handleKeyDown);
            window.removeEventListener('touchend', handleKeyDown);
        };

    }, []);

    // Function to get a random photo
    const get_photo = () => {
        const max = 400
        const min = 200 
        let height = heightRef.current
        let width = widthRef.current
        let placeKitten_photoSize = `${Math.round(Math.random() * (max - min) + min)}/${Math.round(Math.random() * (max - min) + min)}`
        let unsplash_photoSize = "";

        // Check if height and width (if specified by user) is between max and min
        if (width && height) {
            if ((width < min || width > max) || (height < min || height > max)) {
                alert(`Width and Height must be between ${min} and ${max} pixels.`)

                set_height("");
                set_width("");
                
                height = null;
                width = null;
            }
            placeKitten_photoSize = `${width}/${height}`
            unsplash_photoSize=`${width}x${height}`
        }

        // Get a random num 
        const rand_num = Math.random()

        if (rand_num > splitRef.current) 
            return `${placeKitten_url}/${placeKitten_photoSize}`
        else {
            set_count(count++)
            return `${unsplash_url}/${unsplash_photoSize}?${count}`;
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

        // If client swipes up, get a random photo
        if (event.clientY < startYRef.current || touchMoveRef.current < startYRef.current) {
            
            // Get a random photo
            set_photoURL(get_photo());

            // Clear refs
            set_startY()
            set_touchMove()
        }
    }

    // Event listner for touch move
    const handleTouchMove = (event) => {
        set_touchMove(event.changedTouches[0].clientY)
    }

    return (
        <Content>
            <TikTok_logo src={tikTok_logo}></TikTok_logo>
            
            <Image image={photoURL} />
            
            <Options>
                <Slider 
                    split={split} 
                    set_split={set_split} />

                <ChangeSize 
                    height={height}
                    set_height={set_height}
                    width={width}
                    set_width={set_width} />
            </Options>
        </Content>
    )
}