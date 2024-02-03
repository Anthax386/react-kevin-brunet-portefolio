import lang from '../../data/technoLang.json'
import tool from '../../data/technoTool.json'
import Techno from '../Techno'

export default function Technos(){
    return (
        <section className="section-techno" id="techno">
            <h2  className="title">Technologies</h2>
            <div className="techno-group">
                <h3 className="title">Langages</h3>
                <div className="techno" id="technoLang">     
                    {lang.map((e, index) => ((e.display === true) && <div key={index}><Techno techno={e}/></div>))}
                </div>
            </div>
            <div className="techno-group">
                <h3 className="title">Outils</h3>
                <div className="techno" id="technoTool">
                    {tool.map((e, index) => (e.display === true) && (<div key={index}><Techno techno={e}/></div>))}
                </div>
            </div>
        </section>
    )
}