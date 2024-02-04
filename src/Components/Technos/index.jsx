import { useState, useEffect } from 'react'
import { getLangs } from '../../data/getLangs'
import { getTools } from '../../data/getTools'
import Techno from '../Techno'

export default function Technos(){

    const [tools, setTools] = useState([])
    const [langs, setLangs] = useState([])

    useEffect(() => {
        getTools()
        .then((data) => {
            setTools(data)
        })
    }, []);
    useEffect(() => {
        getLangs()
        .then((data) => {
            setLangs(data)
        })
    }, [])

    return (
        <section className="section-techno" id="techno">            
            <h2  className="title">Technologies</h2>
            <div className="techno-group">
                <h3 className="title">Langages</h3>
                <div className="techno" id="technoLang">     
                    {langs.map((e, index) => ((e.display === true) && <div key={index}><Techno techno={e}/></div>))}
                </div>
            </div>
            <div className="techno-group">
                <h3 className="title">Outils</h3>
                <div className="techno" id="technoTool">
                    {tools.map((e, index) => (e.display === true) && (<div key={index}><Techno techno={e}/></div>))}
                </div>
            </div>
        </section>
    )
}