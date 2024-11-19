import { useEffect, useRef, useState } from "react";
const useSoloObserver = function () {
   

    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(false)
 
     useEffect(()=> {
       
         const observer = new IntersectionObserver((entries)=> {
       
             entries.forEach((entry) => {
               if(entry.isIntersecting) {
                setVisible(entry.isIntersecting);
               }
               else if(!entry.isIntersecting) {
                 setVisible(false)
               }
               
            
                  
            })
                  
            
         },{threshold: 0.25})
 

             if(ref.current) {
                observer.observe(ref.current);
 
             }
           
 
         return ()=> {
             observer.disconnect();
         }
 
     }, [])
 
     console.log("Visible", visible, ref)
     return {visible, ref};
   
    }

 
 export default useSoloObserver;