import { useMemo } from "react";

export interface CardProp2{
    id: number,
    title: string,
    start: string | null,
    setPost: React.Dispatch<React.SetStateAction<PostProp |null>>; 

}

export interface CardObject{
    id: number,
    title: string,
    start: string | null,
   
}

export interface PostProp{
    id: number,
    title: string,
    start: string 
    start_part2: string 
    start_part3: string ,
    mid: string 
    mid_part2: string,
    end: string ,
    code_one: string ,
    code_two: string,
    code_three: string ,
    code_four: string ,
    code_five: string ,
    code_six: string ,
}


const Test = function
({id, title, start}
: CardObject):React.JSX.Element {
    
   

    const limitDescription = useMemo(() => {
        if (!start) return ""; // in case description is empty.
        if (start.length > 40) {
            return start.substring(29, 60) + "...";
        }
        return start;
    }, [start]);
    
    
    return (

        <div className="drawer-wrapper" > 
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