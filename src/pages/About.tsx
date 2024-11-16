import { Fragment } from "react/jsx-runtime";
import { RefType } from "../components/hooks/useIntersectionObservation";


const About = function ({element, inView}: RefType): React.JSX.Element {
    //const  {updatedRefs} = useIntersectionObserver();
    
    return (
      
            <section id="about-section" ref={element} className={`${inView ? 'slide-in-active' : ''}`} > 
                <div className="about-information">
                    <h2> I'm in the about section </h2>
                </div>
            </section>
        
    )
}

export default About;

//TODO: Make Pages simple for now
//ref={updatedRefs[0].element} className={`${updatedRefs[0].inView ? "pink": " "}`}