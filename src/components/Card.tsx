export interface CardProp {
    id: number,
    title: string,
    description: string,

}


const Card = function({id, title, description}: CardProps):React.JSX.Element {
    
    
    return (

        <div className="drawer-wrapper">
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