import { useEffect, useState } from "react";
//import { get_photo } from "../helper_functions/get_pictures";
import Image from  "../components/image";

export default function Home() {
    const [photo, set_photoURL] = useState()
    const max = 700
    const min = 200 

    useEffect(() => {
        // Get a random photo and store the URL in a useState variable
        set_photoURL(get_photo());

        // Add event listener to listen when the user clicks a key on the keyboard
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    // Function to get a random photo
    const get_photo = () => {
        // Get a random num 
        const rand_num = Math.round(Math.random())

        if (rand_num === 0)
            return `https://placekitten.com/${Math.round(Math.random() * (max - min) + min)}/${Math.round(Math.random() * (max - min) + min)}`
        else
            return `https://source.unsplash.com/random/${Math.round(Math.random() * (max - min) + min)}x${Math.round(Math.random() * (max - min) + min)}`
    }

    // Refresh the photo if the user clicks on the 'up' arrow key
    const handleKeyDown = (event) => {
        if (event.keyCode === 38) {

            // Get a random photo
            set_photoURL(get_photo());
        }
    };

    return (
        <div>
            Home
            <Image image={photo} />
            <p>{photo}</p>
        </div>
    )
}