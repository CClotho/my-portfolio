export interface CardProp {
    id: number,
    title: string,
    description: string,
    setPost: React.Dispatch<React.SetStateAction<number>> | null; 

}


const Card = function({id, title, description, setPost}: CardProps):React.JSX.Element {
    
    
    return (

        <div className="drawer-wrapper" onClick={() => setPost({id, title, description})}>
          <div className="drawer">
          <div className="drawer-inside"></div>
             <article className="card"key={id}>
            
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>

             </article>
        </div>
        </div>
           
    
    )
}


export default Card;