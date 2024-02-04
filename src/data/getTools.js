export async function getTools(){
    try {
        const response = await fetch('http://localhost:5000/tool')
        return await response.json()
    } catch(error) {
        console.error(`${error} Failed to fetch tools`)
    }
}