import Hero from "./hero";
import Card from "./card";
import Mosaic from "./mosaic";
import Contact from "./contact";
import About from "./about";
import Footer from "./footer";  
import Profiles from './profiles';
import Quote from './quote';


export default function App() {
    return (
      <>
        <Hero />
        <About />
        <Mosaic />
        <Profiles />
        <Card satnik={true} />
        <Quote />
        <Card />
        <Contact />
        <Footer />
      </>
    )
}