// import React from "react";
// import Greeting from "./components/Greeting";

import About from "./About";
import CommitmentSection from "./CommitmentSection";
import Hero from "./Hero";
import ProjectSwiper from "./ProjectSwiper";
import Services from "./Services";

function Rout() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <ProjectSwiper />
            <CommitmentSection />
        </>
    )
}

export default Rout;