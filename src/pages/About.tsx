import useSoloObserver from "../components/hooks/useSoloObserver";
import { RefType } from "../components/hooks/useIntersectionObservation";


const About = function ({element, inView}: RefType): React.JSX.Element {
    const {visible, ref} = useSoloObserver();
    return (
  
            <section id="about-section" ref={element} className='show-section'> 
               <div className="about-bg">
               <h2 className="about-h2"> <span className={`h2-span ${inView ? 'fill-letter-white' : ''}`}> Mabuhay!</span> </h2>
                <div className={`about-information ${inView ? 'slide-in-vertically' : ''}`}>
                    <p>I'm Kris, and I'm a front-end developer and programmer from the Philippines. Back then, I was just taking the digital world and
                    those technology tools for granted, and that changed when I finally recognized the value of programming and how these technology tools made it possible to make changes in this world and in the lives of others.
                    Ever since that moment, I have taken a keen interest in how things work in the web, be it how each website or web application is designed and developed and how data is passed safely in the world of the web.
                    </p>


                </div>
                
                <section className="skills" ref={ref}>
                    <h2 className={`about-h2 ${visible ? 'highlight' : 'hidden'}`} > <span className={`h2-span ${visible ? 'fill-letter-white-delay' : 'hidden'}`}> Skills!</span> </h2>
                    <ul className={`frontend-skills ${visible ? 'slide-in-li-vertically': 'hidden'}`} >
                        <span className="type"> Technical Skills: </span>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>HTML</li>
                        <li>Pug</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>React Testing Library</li>
                        <li>Jest</li>
                        <li>MongoDB</li>
                    </ul>

                    <ul className={`frontend-skills ${visible ? 'slide-in-li-vertically': 'hidden'}`} >
                        <span className="type"> Language: </span>
                        <li>Filipino</li>
                        <li>English</li>
                       
                    </ul>
                    </section>
               </div>
            </section>
        
    )
}

export default About;

//TODO: Make Pages simple for now
//ref={updatedRefs[0].element} className={`${updatedRefs[0].inView ? "pink": " "}`}