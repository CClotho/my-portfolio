
import Card from "./Card";
import { CardProp } from "./Card";
import { useState } from "react";

export interface PostProp {
    id:number;
    title: string;
    description: string;
   
  

}

const PostList = function():React.JSX.Element {
    //{id:1, title: "useCallback", description: "useCallback is useful for...", setPost: null}
    const [post, setPost] = useState<PostProp | null>(null);
    
    return (
        <section className="posts">
             
           {/* Map this later and past post setter*/}
           <section className="posts-wrapper">
                <Card id={5}title="useCallback" description="useCallback is useful for ...." setPost={setPost}/>
                <Card id={6}title="React.Memo" description="useCallback is a hook in React that simply caches your function by returning the same function definition or function reference between re-renders unless its dependencies change, then that function definition that is created in that render will be used. As we know, whenever a re-render happens in React, everything is recreated again from scratch, and React uses Object.is() to compare the difference between each state and prop, which in the case of objects, it checks if it references the same reference in memory, and in terms of primitives, it checks whether its the same value as the previous one." setPost={setPost}/>
                <Card id={7}title="useCallback" description="useCallback is useful for ...." setPost={null}/> {/* this what causes for me to add optional ? chaning to only call setPost if it's not null or there's call back function that is passed which obviously doesn't make a sense that I pass null for a call back function LOL my mistake here*/}
                <Card id={8}title="useCallback" description="useCallback is useful for ...."  setPost={null}/>
             
           </section>

             {post ? 
             (<article className={`${post ? "active-article" : "inactive"}`} key={post.id}>
                <button id="close-article" onTouchStart={() => setPost(null)} onClick={() => setPost(null)}> Close</button>
                <h3 className="active-title">{post.title}</h3>
                <p className="active-text outfit-light">{post.description}</p>
             </article>) : (<article className="inactive"></article>)}
        </section>
       
                   
    )
}


export default PostList;
