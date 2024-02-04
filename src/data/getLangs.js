export async function getLangs(){
    try {
        const response = await fetch('http://localhost:5000/lang')
        return await response.json()
    } catch(error) {
        console.error(`${error} Failed to fetch langs`)
    }
}