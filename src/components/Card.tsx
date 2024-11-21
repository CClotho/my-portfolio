import { useMemo } from "react";
import { PostProp } from "./PostList";



export interface CardProp {
   id:number;
    title: string;
    description: string;
    setPost: React.Dispatch<React.SetStateAction<PostProp| null>> | null; 
  

}


const Card = function({id, title, description, setPost}: CardProp):React.JSX.Element {
    
   

    const limitDescription = useMemo(() => {
        if (!description) return ""; // in case description is empty.
        if (description.length > 40) {
            return description.substring(0, 50) + "...";
        }
        return description;
    }, [description]);
    
    
    return (

        <div className="drawer-wrapper" onClick={() => setPost?.({id, title,description})}> {/* ? optional chaining only call setPost if it's not null*/} 
          <div className="drawer">
          <div className="drawer-inside"></div>
             <article className="card"key={id}>
            
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{limitDescription}</p>
                <span> Continue Reading </span>
             </article>
        </div>
        </div>
           
    
    )
}


export default Card;