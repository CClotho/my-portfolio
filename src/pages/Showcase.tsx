import { Fragment } from "react/jsx-runtime";
import { RefType } from "../components/hooks/useIntersectionObservation";


const Showcase = function ({element, inView}: RefType): React.JSX.Element {
    //const  {updatedRefs} = useIntersectionObserver();
    
    return (
      
            <section id="showcase-section" ref={element} className={` ${inView ? 'show-section' : ''}`} > 
                
                    <div className={`showcase-information ${inView ? 'show-section' : ''}`}>
                    <h2> Showcase </h2>
                    <h3> Work In Progress</h3>

                    </div>
                
            </section>
        
    )
}

export default Showcase;
