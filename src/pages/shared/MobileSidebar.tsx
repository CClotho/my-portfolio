
import { useState, memo } from "react";

const MobileSidebar = function(): React.JSX.Element {
    const [isToggle, setToggle] = useState<boolean>(false);

    const handleMenu = () => {
        setToggle(!isToggle);
    }
    
    return (

        <nav className="mobile-sidebar">
            <div className="menu-icon" onClick={handleMenu}></div>
            <ul className={`mobile-sidebar-list ${isToggle ? "show" : "hide"}`}>
                <li id="home"><a href="#home-section" className={`home-mobile ${isToggle ? 'animate' : ''}`}>Home</a></li>
                <li id="about" className={`about-mobile ${isToggle ? 'animate' : ''}`}><a href="#about-section" className="about">About</a></li>
                <li id="contact" className={`contact-mobile ${isToggle ? 'animate' : ''}`}><a href="#contact-section" className="contact">Contact</a></li>
                <li id="showcase" className={`showcase-mobile ${isToggle ? 'animate' : ''}`}><a href="#showcase-section" className="showcase">Showcase</a></li>
                <li id="blog" className={`blog-mobile ${isToggle ? 'animate' : ''}`}> <a href="#blog-section" className="blog">Blog</a></li>
            </ul>   
        </nav>
    )
}
 

export default memo(MobileSidebar);

/**
 * Render 2 types of sidebar 1 for mobile and 1 for desktop
 * Render desktop=main-sidebar if homepage component is not visible in the screen
 * Render mobile-sidebar if screen or viewport is <=800px or etc
 * 
 * Create 2 separate component for desktop and mobile and render based on the screen size
 * or this one and do the manipulation on the css side.
 * 
 * react-responsive === reusable components/ create 2diff components for mobile and desktop
 */

/**BUG:
 * https://stackoverflow.com/questions/44679794/position-fixed-on-chrome-mobile-causing-element-to-move-on-scroll-up-down
    THIS DID THE FIXED: adding "user-scalable=no" in meta tags 
*/