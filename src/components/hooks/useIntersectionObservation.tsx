import { useState, useEffect, MutableRefObject, useRef} from "react"

export interface RefType {
    element:MutableRefObject<HTMLDivElement | null>,  
    inView: boolean   
  }

const useIntersectionObserver = function () {
   
   // const refs:Array<RefType> = [{element: useRef<HTMLDivElement>(null), inView: false}, {element: useRef<HTMLDivElement>(null), inView: false}];
    const [updatedRefs, setUpdatedRefs] = useState<Array<RefType>>(
        [{element: useRef<HTMLDivElement>(null), inView: false},
        {element: useRef<HTMLDivElement>(null), inView: false},
        {element: useRef<HTMLDivElement>(null), inView: false}
        ]);
  

    useEffect(()=> {
      
        const observer = new IntersectionObserver((entries)=> {
      
            entries.forEach((entry) => {
               
                const index = updatedRefs.findIndex(ref => ref.element.current === entry.target); // returns -1 if no element is found
                if (index !== -1) { // we then check if it's -1 else if not then there's an element
                    if (entry.isIntersecting) {
                        console.log("entry is intersecting", entry.isIntersecting)
                        setUpdatedRefs((prevState) => {
                            const newRefs = [...prevState]; // shallow copy of objects but creating a new array in memory
                            newRefs[index].inView = entry.isIntersecting;
                            return newRefs;
                        }); 
                     
                        //observer.unobserve(entry.target);
                        return;
                    }
                    else {
                        setUpdatedRefs((prevState) => {
                            const newRefs = [...prevState]; // shallow copy of objects but creating a new array in memory
                            newRefs[index].inView = false;
                            return newRefs;
                        }); 
                    }
                 
                }
                
                
            });
            

           
        }, {threshold:0.5}); //rootMargin: '0px 0px 300px'

        updatedRefs.forEach((ref: RefType)=> {
            if(ref.element.current) {
               observer.observe(ref.element.current);

            }
          
                
        })

        return ()=> {
            observer.disconnect();
        }

    }, [])


    return {updatedRefs};
  

}

export default useIntersectionObserver;




/**
 * Since we need to attach our observer to our components that we wanted to observe
 * we have to select them using an Array of refs.
 * Pass An array of ref
 * Check whether the entry isIntersecting or in view if it is then set the state
 * isInView or visibility to true then return the value
 */


/*  entries.forEach((entry) => {
               
                const index = updatedRefs.findIndex(ref => ref.element.current === entry.target); // returns -1 if no element is found
                if (index !== -1) { // we then check if it's -1 else if not then there's an element
                    if (entry.isIntersecting) {
                        console.log("entry is intersecting", entry.isIntersecting)
                        setUpdatedRefs((prevState) => {
                            const newRefs = [...prevState]; // shallow copy of objects but creating a new array in memory
                            newRefs[index].inView = entry.isIntersecting;
                            return newRefs;
                        }); 
                     
                        //observer.unobserve(entry.target);
                    }
                 
                }
                
                
            });
             */