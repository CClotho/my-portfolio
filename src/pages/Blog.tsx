import useSoloObserver from "../components/hooks/useSoloObserver";
import { RefType } from "../components/hooks/useIntersectionObservation";


const Blog = function (): React.JSX.Element {
    const {ref, visible} = useSoloObserver();
    
    return (
      
            <section id="blog-section" ref={ref}  className={`${visible ? 'show-section' : ''}`}> 
                
                    <div className={`blog-posts ${visible ? 'slide-in-horizontally' : ''}`}>
                    <h2> Blog </h2>
                    <h3> Work In Progress</h3>

                    </div>
                
            </section>
        
    )
}

export default Blog;
