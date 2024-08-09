import React from "react";
import Intro from "../components/Home/Intro";
import Services from "../components/Home/MainServ";
import Customers from "../components/Home/Customers";
import MainContact from "../components/Home/MainContact";

const Home = () => {

    return(
        <main className="main">
            <Intro />
            {/* <Services />
            <Customers /> */}
            {/* <MainContact /> */}
        </main>
    );

}

export default Home;