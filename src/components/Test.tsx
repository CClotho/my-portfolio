import { useMemo } from "react";

export interface CardProp2{
    id: number,
    title: string,
    start: string | null,
    mid: string | null,
    end: string | null,
    code_one: string | null,
    code_two: string | null,
    code_three: string | null
    setPost: React.Dispatch<React.SetStateAction<PostProp |null>>; 

}

export interface PostProp{
    id: number,
    title: string,
    start: string | null,
    mid: string | null,
    end: string | null,
    code_one: string | null,
    code_two: string | null,
    code_three: string | null
}


const Test = function
({id, title, start, mid, end, code_one, code_two, code_three, setPost}
: CardProp2):React.JSX.Element {
    
   

    const limitDescription = useMemo(() => {
        if (!start) return ""; // in case description is empty.
        if (start.length > 40) {
            return start.substring(0, 50) + "...";
        }
        return start;
    }, [start]);
    
    
    return (

        <div className="drawer-wrapper" onClick={() => setPost?.({id, title,start, mid,end, code_one, code_two, code_three})}> {/* ? optional chaining only call setPost if it's not null*/} 
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


export default Test;