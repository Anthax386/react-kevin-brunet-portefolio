// import works from '../../data/works.json'
import Work from "../Work"
import { getWorks } from "../../data/Datas";

export default async function Works(){

    const works = await getWorks();
    console.log(works)
    
    return (
        <section className="works" id="works">
            <h2 className="title">Mes projets</h2>
            <div className='projets'>
                {works.map((work, index) => ((work.display===true) && <div key={index}><Work work={work}/></div> ))}
            </div>
        </section>
    )
}