import { RefType } from "../components/hooks/useIntersectionObservation";
import { memo } from "react";
const Homepage = function({element, inView}: RefType): React.JSX.Element {

    return (
       <header className="header-main-nav " ref={element} id="">
         <nav className={`main-nav ${inView ? "" : ""}`}>
            <div className="links" id="about"> 
                <a href="#about-section" className="about"> About</a>
            </div>
            <div className="links" id="contact">
                <a href="#contact-section" className="contact">Contact</a>
            </div>
            <div id="k-box" className={`${inView ? "slide-in-vertically" : ""}`}>K DEV</div>
            <div className="links" id="showcase">
                <a href="#showcase-section" className="showcase">Showcase</a>
            </div>
            <div className="links" id="blog">
                <a href="#blog-section" className="blog">Blog</a>
            </div>
        </nav>
       </header>
    )
}

export default memo(Homepage);

/**
 * The purpose of setting two different selectors for .contact,& #contact
 * is to set the border otherwise the border won't be seen because of the same color.
 * 
 * 
 */