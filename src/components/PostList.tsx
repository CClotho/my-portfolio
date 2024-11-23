
import Card from "./Card";

import { useState, useEffect } from "react";
import {data} from "../data/data";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostProp } from "./Card";
const PostList = function():React.JSX.Element {
    //{id:1, title: "useCallback", description: "useCallback is useful for...", setPost: null}
    const [post, setPost] = useState<PostProp| null>(null);
    const [posts, setPosts]= useState<PostProp[] | []>(data)

    useEffect(() => {
        

    }, []); 
    
    return (
        <section className="posts">
             
          
           <section className="posts-wrapper">

                {posts && posts.length > 0 ? posts.map((post)=> {
                return (
                    <div key={post.id} onClick={() => setPost(post)}>
                        <Card
                        id={post.id}
                        title={post.title}
                        start={post.start}
                        />
                     </div>
                )
                })
                 : (<div> There are no posts available</div>)}
                
            
               
             
           </section>

             {post ? 
             (<article className={`${post ? "active-article" : "inactive"}`} key={post.id}>
                <button id="close-article" onTouchStart={() => setPost(null)} onClick={() => setPost(null)}> Close</button>
               
              
                {/* TODO: ADD MARKDOWN HERE*/}
                <ReactMarkdown children={post.start}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>
                <br/>

                <ReactMarkdown children={post.start_part2}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>
                
                <div className="code">
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {post.code_one}
                </SyntaxHighlighter>
                </div>

                 {/*Got problem here */ }
                <ReactMarkdown children={post.start_part3}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>
               
               <div className="code"> 
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {post.code_two}
                </SyntaxHighlighter>
               </div>

               <ReactMarkdown children={post.mid}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

               {post.code_three && post.code_three.length > 0 && (
                  <div className="code">
                  <SyntaxHighlighter language="typescript" style={nightOwl}>
                      {post.code_three}
                  </SyntaxHighlighter>
                  </div>
               )}

                {post.code_four && post.code_four.length > 0 && (
                  <div className="code">
                  <SyntaxHighlighter language="typescript" style={nightOwl}>
                      {post.code_four}
                  </SyntaxHighlighter>
                  </div>
               )}

               
                <ReactMarkdown children={post.mid_part2}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

                {post.code_five && post.code_five.length > 0 && (
                  <div className="code">
                  <SyntaxHighlighter language="typescript" style={nightOwl}>
                      {post.code_five}
                  </SyntaxHighlighter>
                  </div>
                )}

                <ReactMarkdown children={post.end}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

                {post.code_six && post.code_six.length > 0 && (
                  <div className="code">
                  <SyntaxHighlighter language="typescript" style={nightOwl}>
                      {post.code_six}
                  </SyntaxHighlighter>
                  </div>
                )}
       
             </article>) : (<article className="inactive"></article>)}
        </section>
       
                   
    )
}


export default PostList;
