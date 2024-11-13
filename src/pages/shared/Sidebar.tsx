
import { useState, memo } from "react";

const Sidebar = function(): React.JSX.Element {
    const [isToggle, setToggle] = useState<boolean>(false);

    const handleMenu = () => {
        setToggle(!isToggle);
    }
    
    return (

        <nav className="main-sidebar">
            <div className="menu-icon" onClick={handleMenu}></div>
            <ul className={`sidebar-list ${isToggle ? "hide" : "show"}`}>
                <li id="about"><a href="#about-section" className="about">About</a></li>
                <li id="contact"><a href="#contact-section" className="contact">Contact</a></li>
                <li id="showcase"><a href="#showcase-section" className="showcase">Showcase</a></li>
                <li id="blog"><a href="#blog-section" className="blog">Blog</a></li>
            </ul>   
        </nav>
    )
}
 

export default memo(Sidebar);

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