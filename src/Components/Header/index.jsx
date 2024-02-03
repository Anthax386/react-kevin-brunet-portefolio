import SwitchBtn from "../SwitchBtn";

export default function Header(){
    return (
        <header>
            <h1 className="title">Portefolio Kevin Brunet - Developpeur FrontEnd</h1>
            <nav className="header_menu">
                <a className="btn" href="#about">Qui suis-je ?</a>
                <a className="btn" href="#projets">Projets</a>
                <a className="btn" href="#techno">Technologies</a>
            </nav>
            <SwitchBtn />
        </header>
    )
}