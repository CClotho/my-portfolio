import useSoloObserver from "../components/hooks/useSoloObserver";
import { useState } from "react";
import Card, { CardProp } from "../components/Card";
import PostList from "../components/PostList";

const Blog = function (): React.JSX.Element {
    const {ref, visible} = useSoloObserver();
    const [post, setPost] = useState<CardProp | null>(null);
    return (
      
            <section id="blog-section" ref={ref}  className={`${visible ? 'show-section' : ''}`}> 
                
                    <div className={`blog-posts ${visible ? 'slide-in-horizontally' : ''}`}>
                    <h2> Blog </h2>
                    <h3> Work In Progress</h3>
                     <PostList/>
                    </div>
                
            </section>
        
    )
}

export default Blog;
