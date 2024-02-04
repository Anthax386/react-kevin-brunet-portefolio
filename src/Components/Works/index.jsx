import Work from "../Work"
import { useState, useEffect } from "react";
import { switchState } from "../../scripts/switchState";
import { getWorks } from "../../data/getWorks";

export default function Works(){

    const [works, setWorks] = useState([]);
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        getWorks()
        .then((data) => {
            setWorks(data)
        })
    }, []);

    return (
        <section className="works" id="works">
            <h2 className="title">Mes projets</h2>
            <div className='projets'>
                {
                    showMore 
                    ? works.map((work, index) => <div key={index}><Work work={work}/></div>)
                    : works.map((work, index) => work.display && <div key={index}><Work work={work}/></div>)
                }
            </div>
            <button className="btn" onClick={() => switchState(showMore, setShowMore)}>{showMore ? 'Afficher moins...' : 'Afficher plus...'}</button>
        </section>
    )
}