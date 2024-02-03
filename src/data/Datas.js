export async function getWorks() {
    const reponse = await fetch('http://localhost:5000/portefolio/work')
    const works = await reponse.json();
    return works;
}