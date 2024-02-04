export async function getWorks(){
    try {
        const response = await fetch('http://localhost:5000/work')
        return await response.json()
    } catch(error) {
        console.error(`${error} Failed to fetch works`)
    }
}