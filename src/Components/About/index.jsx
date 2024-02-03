import moi from "../../assets/images/moi.png";

export default function About(){
    return (
        <section id="about" className="about">
                <article className="about_left">
                    <h2 className="title">Qui suis-je ?</h2>
                    <p>
                        Je m'appelle Kevin Brunet, actuellement en formation pour le métier
                        d'intégrateur web via une formation OpenClassrooms. Depuis mon
                        enfance, je suis passionné d'informatique, de nouvelles technologies
                        et de jeux vidéos. Le développement était donc pour moi une voie
                        totalement naturelle. J'ai commencé à m'intéresser au métier de
                        développeur web en commençant comme tout le monde par le HTML/CSS et
                        j'ai trouvé ça très satisfaisant. C'est pourquoi j'ai voulu en faire
                        mon métier.
                    </p>
                </article>
                <article className="about_right">
                    <img src={moi} alt="Kevin BRUNET" />
                    <a className="btn" href="./assets/documents/CV-Kevin-BRUNET.pdf" download="CV-Kevin-BRUNET.pdf">
                        Télécharger mon CV 
                    </a>
                </article>
            </section>
    )
}