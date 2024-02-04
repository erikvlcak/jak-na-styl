import Hero from "./hero";
import Card from "./card";
import Mosaic from "./mosaic";
import Contact from "./contact";
import About from "./about";
import Footer from "./footer";  
import Profiles from './profiles';
import Quote from './quote';


export default function App() {

    function handleScroll(id) {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }}

    return (
      <>
        <Hero scrollTo={handleScroll} />
        <About />
        <Mosaic />
        <Profiles />
        <Card satnik={true} />
        <Quote />
        <Card />
        <Contact />
        <Footer scrollTo={handleScroll} />
      </>
    )
}