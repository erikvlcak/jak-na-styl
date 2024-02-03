import Hero from "./hero";
import Card from "./card";
import Mosaic from "./mosaic";
import Contact from "./contact";
import About from "./about";
import Header from "./header";
import Footer from "./footer";  

export default function App() {
    return (
        <>
            <Hero/>
            <Mosaic/>
            <Header/>
            <Card/>
            <About/>
            <Card/>
            <Contact/>
            <Footer/>
        </>
    );
}