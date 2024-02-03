import Hero from "./hero";
import Card from "./card";
import Mosaic from "./mosaic";
import Contact from "./contact";
import About from "./about";
import Header from "./header";

export default function App() {
    return (
        <>
            <Hero/>
            <Header/>
            <Mosaic/>
            <Card/>
            <Card/>
            <About/>
            <Contact/>
        </>
    );
}