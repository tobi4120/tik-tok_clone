import { useEffect, useState, useRef } from "react";
import Image from  "../components/image";
import Slider from "../components/slider";
import ChangeSize from "../components/change_size"
import styled from 'styled-components';
import tikTok_logo from "../assets/tik-tok-logo.png"

// Styles
const TikTok_logo = styled.img`
    width: 120px;
    padding: 10px 20px;
`;

const Content = styled.div`
    padding: 15px;
    
    @media (max-width: 420px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Options = styled.div`
    display: flex;
    gap: 20px;
    margin: auto;
    justify-content: center;

    @media (max-width: 1100px) {
        display: block;
    }
`;

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
        const max = 400
        const min = 200 
        let height = heightRef.current
        let width = widthRef.current

        // Check if height and with (if specified by user) is between 100 and 1000
        if (width && height) {
            if ((width < min || width > max) || (height < min || height > max)) {
                alert(`Width and Height must be between ${min} and ${max} pixels.`)

                set_height("");
                set_width("");
                
                height = null;
                width = null;
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
        console.log(event.clientY)
    }

    // Event listener for mouse up key
    const handleMouseUp = (event) => {
    
        // If client is using slider, do not consider this a "swipe" gesture
        if (event.srcElement.name === "slider") return

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