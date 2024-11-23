
import { useState, memo } from "react";

const MobileSidebar = function(): React.JSX.Element {
    const [isToggle, setToggle] = useState<boolean>(false);

    const handleMenu = () => {
        setToggle(!isToggle);
    }
    
    return (

        <nav className="mobile-sidebar">
            <div className="menu-icon" onClick={handleMenu}><img src="images/jester-hat.png" alt="Jester-hat icons created by iconfield"></img></div>
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

