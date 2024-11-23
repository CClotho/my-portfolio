import { Fragment } from "react/jsx-runtime";
import { RefType } from "../components/hooks/useIntersectionObservation";


const Contact = function ({element, inView}: RefType): React.JSX.Element {
   
    
    return (
           /*<section id="contact-section" ref={element} className={` ${inView ? 'show-section' : ''}`} >  */
            <section id="contact-section" ref={element} className={` ${inView ? 'show-section' : ''}`} > 
                  <div className="icons-container">

                  <figure  className={` ${inView ? 'show-section' : ''}`}>
                        <img src="/images/alien.png" alt="alien" id="alien"></img>
                        <figcaption> <a href="https://www.freepik.com/icon/alien_6542598" target="_blank">Icon by Freepik</a></figcaption>
                    </figure>

                    <figure  className={` ${inView ? 'show-section' : ''}`}>
                        <img src="/images/jester-hat.png" alt="jester" id="jester"></img>
                        <figcaption><a href="https://www.flaticon.com/free-icons/jester-hat" target="_blank" title="jester-hat icons">Jester-Hat Menu Icon by <span> iconfield - Flaticon</span></a></figcaption>
                    </figure>
                  </div>
                    
                    <div className={`contact-information ${inView ? 'slide-in-active' : ''}`}>
                    <h2> Contact Me: </h2>

                    <ul className="contact-list">
                        <li>Email: <a href="mailto:kelisi4@outlook.com">kelisi4@outlook.com</a></li>
                        <li>GitHub: <a href="https://github.com/CClotho" target="blank"> CClotho</a></li>
                      
                    </ul>

                   
                   
                  
                    </div>
                
            </section>
        
    )
}

export default Contact;
