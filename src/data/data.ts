const data = [
    {id: 111, 
    title: "Why use useCallback?", 
    start: `useCallback is a hook in React that simply caches your function by returning the same function definition or function reference between re-renders unless its dependencies change, 
    then that function definition that is created in that render will be used. As we know, whenever a re-render happens in React, everything is recreated again from scratch, and React uses Object.is() 
    to compare the difference between each state and prop, which in the case of objects, it checks if it references the same reference in memory, and in terms of primitives, 
    it checks whether its the same value as the previous one.

    useCallback is useful for caching the functions that we defined and created from our parent component that we pass to our child components as a callback prop for updating parent state inside of our child components.
    `,
    mid: `
    So here we have a problem, whenever we click the button that updates our state to true, the < Child/> component re-renders.
    This is understandable given that the state of our <Parent/> component has changed. We can try to memoize our Child component by wrapping it with React.memo to tell React that, "Hey, this is a pure component, and only re-render this component if its prop changed.".

    export default React.memo(Child)

    But then the problem still persists! We can debug this by using React Dev Tools profiler and toggle why this component re-renders in the option, but in this case I won't be explaining it with React Dev Tools profiler. So even though we wrapped our Child component to ensure that it won't re-render unless its props changed, it still doesn't fix the issue, but then we know that our Child prop indeed changes, and if we look back at our code, we are passing an onHandleClick function as props in our Child component, which, if we have a recap awhile ago, we know that in React whenever a re-render happens, it re-creates everything from scratch and uses Object.is() for comparison, which in this case the problem is our onHandleClick because whenever it's recreated on every re-render, its function definition or function reference in memory is changed.
    `,
    end: `What happens 
    //previous function definition or reference
    onHandleClick --> points 12345

    // React creates new function definition after re-render
    onHandleClick ---> points 12333

    onHandleClick === onHandleClick results to false.

    What happens is that onHandleClick -> points to 12345 in memory, then on the next re-render React creates a new onHandleClick function that points -> to a new address 12333 in memory, then React compares the newly created onHandleClick function to the previous onHandleClick function definition in memory, which will result in React re-rendering the child component because its prop changed. That comes in useCallback, which lets us cache our onHandleClick function by React returning the same function between re-renders.

    So below we wrapped our onHandleClick function with useCallback and specified increment state as its dependency, meaning that this function will only re-render if the dependency, which in our case is increment, is changed. So now whenever we click the button that updates our state to true, it no longer triggers re-render on our Child component.
    `,
    code_one: `
    import Child './Child';
    const Parent = function (): React.JSX.Element {
        const [state, setState] = useState<boolean>(false);
        const [increment, setIncrement] = useState<number>(0);
        
        const onHandleClick = (n: number) => { // function definition or reference in memory is changed which causes for the child component to re-render


            setIncrement(n+ increment);
        }

        console.log("Value of state", state)
        console.log("Value of increment", increment)
    
        return (
        <>
        
        <button onClick={()=> setState(!state)}>Set State</button>	
        <Child onClick={onHandleClick}/>  
        </>
        
        )
    
    }
    interface ChildProp {
        onClick: (e: number) => void;

    }
        
        const Child = function({onClick}: ChildProp): React.JSX.Element {
            const handleClick = () => {
                
                onClick(5);
            }
            console.log(" Child re-rendered!")
        return <button onClick={handleClick}> Click Me </button>
        
        }
        

    export default Child;

    `,
    code_two: `
    const Child = function({onClick}: ChildProp): React.JSX.Element {
            const handleClick = () => {
                
                onClick(5);
            }
            console.log(" Child re-rendered!")
        return <button onClick={handleClick}> Click Me </button>
        
        }
        

    export default React.memo(Child);
    `,
    code_three:`

    import Child from "./Child";
    import { useState } from "react";
    import { useCallback } from "react";
    const Parent = function (): React.JSX.Element {
        const [state, setState] = useState<boolean>(false);
        const [increment, setIncrement] = useState<number>(0);
        
        const onHandleClick = useCallback((n: number) => { // function definition or reference in memory is changed which causes for the child to re-render
            // some handle click logic 

            setIncrement(n+ increment);
        },[increment])
        console.log("Value of state", state)
        console.log("Value of increment", increment)
    
        return (
        <>
        
        <button onClick={()=> setState(!state)}>Set State</button>	
        <Child onClick={onHandleClick}/>  
        </>
        
        )
    
    }
    

    export default Parent;


    `,
}
]

export default data;