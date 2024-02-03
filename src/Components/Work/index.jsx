export default function Work({ work }){

    return (
        <article class="projet">
                <div className="projet_readme">
                    <h3 className="title">{work.name}</h3>
                    <p id="readme">{work.readme_short}</p>
                </div>
                <div className="projet_preview">
                    <img src={work.preview} alt={work.name}/>
                    <div className="links" id="1">
                        <a className="btn" target="_blank" href={work.githubLink}>Github</a>
                        {(work.githubPageLink) && (<a className="btn" target="_blank" href={work.githubPageLink}>Github Page</a>)}
                    </div>
                </div>
        </article>
    )
}