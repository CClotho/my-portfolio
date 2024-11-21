
import Card from "./Card";
import Test, { PostProp } from "./Test";
import { useState, useEffect,useRef } from "react";
import {data, CallbackContent, code_one, ParentCode, ChildCode, code_two, CallbackFirstPart, CallBackMidPart, code_three, CallbackMidPart2, code_four, CallBackEndPart, code_five, code_visualization, Visualization_Explanation} from "../data/data";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {  gruvboxDark, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TestList = function():React.JSX.Element {
    //{id:1, title: "useCallback", description: "useCallback is useful for...", setPost: null}
    const [post, setPost] = useState<PostProp | null>(null);

    useEffect(() => {
     

    }, []); 
    
    return (
        <section className="posts">
             
           {/* Map this later and past post setter*/}
           <section className="posts-wrapper">
                <Test id={data[0].id}
                title={data[0].title}
                start={data[0].start}
                mid={data[0].mid}
                end={data[0].end}
                code_one={data[0].code_one}
                code_two={data[0].code_two}
                code_three={data[0].code_three}
                setPost={setPost}/>
               
             
           </section>

             {post ? 
             (<article className={`${post ? "active-article" : "inactive"}`} key={post.id}>
                <button id="close-article" onTouchStart={() => setPost(null)} onClick={() => setPost(null)}> Close</button>
               
              
                {/* TODO: ADD MARKDOWN HERE*/}
                <ReactMarkdown children={CallbackFirstPart}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>
                <br/>

                <ReactMarkdown children={ParentCode}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>
                
                <div className="code">
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {code_one}
                </SyntaxHighlighter>
                </div>

                <ReactMarkdown children={ChildCode}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

               <div className="code">
                  
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {code_two}
                </SyntaxHighlighter>
               </div>

               <ReactMarkdown children={CallBackMidPart}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

                <div className="code">
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {code_three}
                </SyntaxHighlighter>
                </div>

                <ReactMarkdown children={CallbackMidPart2}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

                <div className="code">
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {code_four}
                </SyntaxHighlighter>
                </div>

                <div className="code">
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {code_visualization}
                </SyntaxHighlighter>
                </div>

                <ReactMarkdown children={CallBackEndPart}
                className="reactMarkdown" 
                remarkPlugins={[remarkGfm]}/>

            

                <div className="code">
                <SyntaxHighlighter language="typescript" style={nightOwl}>
                    {code_five}
                </SyntaxHighlighter>
                </div>
       
             </article>) : (<article className="inactive"></article>)}
        </section>
       
                   
    )
}


export default TestList;
