import { useEffect, useState, useRef } from "react";
import Image from  "../components/image";

export default function Home() {
    const [photo, set_photoURL] = useState()
    const [split, _set_split] = useState(0.5)
    const max = 700
    const min = 200 

    // Split ref
    const splitRef = useRef(split);

    const set_split = data => {
        splitRef.current = data; // keep updated
        _set_split(data);
    };

    useEffect(() => {
        // Get a random photo and store the URL in a useState variable
        set_photoURL(get_photo());

        // Add event listener to listen when the user clicks a key on the keyboard
        window.addEventListener('keydown', handleKeyDown);

        // Remove listener
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);

    // Function to get a random photo
    const get_photo = () => {

        // Get a random num 
        const rand_num = Math.random()

        if (rand_num > splitRef.current)
            return `https://placekitten.com/${Math.round(Math.random() * (max - min) + min)}/${Math.round(Math.random() * (max - min) + min)}`
        else
            return `https://source.unsplash.com/random/${Math.round(Math.random() * (max - min) + min)}x${Math.round(Math.random() * (max - min) + min)}`;
    }

    // Event listener to refresh the photo if the user clicks on the 'up' arrow key
    const handleKeyDown = (event) => {
        if (event.keyCode === 38) {

            // Get a random photo
            set_photoURL(get_photo());
        }
    };

    // Handle slider change
    const changeSlider = (e) => {
        set_split((e.target.value)/100)
    }

    return (
        <div>
            <Image image={photo} />
            
            <div className="slider">
                <p>Place Kitten: {Math.round(100-split*100)}</p>
                <input type="range" onChange={changeSlider} value={split*100} min="0" max="100" />
                <p>Unsplash: {Math.round(split*100)}</p>
            </div>
        </div>
    )
}