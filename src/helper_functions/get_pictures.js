export const get_photo = async () => {

    // Select random size for place kitten url 
    const max = 700
    const min = 200 
    const height = Math.round(Math.random() * (max - min) + min)
    const width = Math.round(Math.random() * (max - min) + min)

    // URL variables
    const placeKitten = `https://placekitten.com/${height}/${width}`
    const unsplash = "https://source.unsplash.com/random/800x600"
    const options = [placeKitten, unsplash]

    // Randomly select between Placekitten and Unsplash Random
    return options[Math.round(Math.random())]
}