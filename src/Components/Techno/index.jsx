export default function Techno({ techno }){
    return (
        <article className="btn techno">
            <img src={techno.image} alt={techno.name}></img>
            <p>{techno.name}</p>
        </article>
    )
}