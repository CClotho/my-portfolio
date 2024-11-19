import { useState, memo } from "react";

const DesktopSidebar = function(): React.JSX.Element {
    const [isToggle, setToggle] = useState<boolean>(false);

  
    
    return (

        <nav className="desktop-sidebar">
            <ul className="desktop-sidebar-list">
                <li id="home"><a href="#home-section" className="home">Home</a></li>
                <li id="about"><a href="#about-section" className="about">About</a></li>
                <li id="contact"><a href="#contact-section" className="contact">Contact</a></li>
                <li id="showcase"><a href="#showcase-section" className="showcase">Showcase</a></li>
                <li id="blog"><a href="#blog-section" className="blog">Blog</a></li>
            </ul>   
        </nav>
    )
}
 

export default memo(DesktopSidebar);