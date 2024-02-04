export default function Work({ work }){

    return (
        <article className="projet">
                <div className="projet_readme">
                    <h3 className="title">{work.name}</h3>
                    <p id="readme">{work.readMe}</p>
                </div>
                <div className="projet_preview">
                    <img src={work.preview} alt={work.name}/>
                    <div className="links" id="1">
                        <a className="btn" target="_blank" rel="noreferrer" href={work.githubLink}>Github</a>
                        {(work.githubPageLink) && (<a className="btn" target="_blank" rel="noreferrer" href={work.githubPageLink}>Github Page</a>)}
                    </div>
                </div>
        </article>
    )
}