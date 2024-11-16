import { Fragment } from "react/jsx-runtime";
import { RefType } from "../components/hooks/useIntersectionObservation";


const Contact = function ({element, inView}: RefType): React.JSX.Element {
    //const  {updatedRefs} = useIntersectionObserver();
    
    return (
      
            <section id="contact-section" ref={element} className={`${inView ? 'slide-in-active' : ''}`} > 
                <div className="contact-information">
                    <h2> I'm in the contact section </h2>
                </div>
            </section>
        
    )
}

export default Contact;
