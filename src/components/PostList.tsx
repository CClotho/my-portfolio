
import Card from "./Card";
import{ CardProp } from "../components/Card";
import { useState } from "react";

const PostList = function():React.JSX.Element {
    //{id:1, title: "useCallback", description: "useCallback is useful for...", setPost: null}
    const [post, setPost] = useState<CardProp | null>();
    
    return (
        <section className="posts">
             
           {/* Map this later and past post setter*/}
           <section className="posts-wrapper">
                <Card id={5}title="useCallback" description="useCallback is useful for ...." setPost={setPost}/>
                <Card id={6}title="useCallback" description="useCallback is useful for ...."/>
                <Card id={7}title="useCallback" description="useCallback is useful for ...."/>
                <Card id={8}title="useCallback" description="useCallback is useful for ...."/>
             
           </section>

             {post &&
             (<article className="active-article" key={post.id}>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.description}</p>
             </article>) }
        </section>
       
                   
    )
}


export default PostList;
