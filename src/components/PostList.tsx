
import Card from "./Card";
import Drawer from "./Drawer";

const PostList = function({id, title, description}: CardProps):React.JSX.Element {
    
    
    return (
        <section className="posts">
             
          
            <Card id={5}title="useCallback" description="useCallback is useful for ...."/>
            <Card id={6}title="useCallback" description="useCallback is useful for ...."/>
             
        </section>
       
                   
    )
}


export default PostList;
