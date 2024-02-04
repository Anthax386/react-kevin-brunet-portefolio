import { useEffect } from "react";

import About from "../../Components/About";
import Technos from "../../Components/Technos";
import Works from "../../Components/Works";

export default function Home(){

    useEffect(() => {
        document.title = "Kevin-Brunet"
    }, [])

    return(
        <div>
            <About />
            <Works />
            <Technos />
        </div>
    )
}