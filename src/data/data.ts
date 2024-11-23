import { PostProp } from "../components/Card";

const Parent = "`<Parent/>`"
const Child = "`<Child/>`"

export const ParentCode = `Inside of our ${Parent} component, we have defined two states, one that updates the state to either true or false and is initialised as false, and the state is updated by our button, and the other one is a state that adds a number and is initialised as 0. 

We also created an onHandleClick function that has one parameter that accepts a number as an argument and updates our increment state by calling our setIncrement setter and adding the number from our function's parameter to the current value of our increment state, and we then pass the onHandleClick function as a callback prop to our ${Child} component.`;
export const ChildCode =`In our Child file, we simply defined an interface called ChildProp, which contains a type of function that has one parameter that accepts a number as an argument and returns void or nothing, and in our ${Child} component we consumed the onClick callback function in our button that is being passed as props in our ${Child} component, and we passed a number on it, which is 5 in our case.`;

export const CallbackFirstPart = 
`
## What is useCallback for?
useCallback is a hook in React that simply caches your function by returning the same function definition or function reference between re-renders unless its dependencies change, then that function definition that is created in that render will be used.

## Why use useCallback?
As we know, whenever a re-render happens in React, everything is recreated again from scratch, and React uses Object.is() to compare the difference between each state and prop, which in the case of objects, it checks if it references the same reference in memory, and in terms of primitives, it checks whether its the same value as the previous one.


Which is why useCallback is useful for caching functions or the functions that we defined and created from our parent component that we pass to our child components as a callback prop for updating parent state inside of our child components.

**So let's have an example**. Below we have two components, which are our ${Parent} component and ${Child} component.
`;

export const CallBackMidPart = `
### Problem
So here we have a problem, whenever we click the button that updates our state to true, the ${Child} component re-renders.

This is understandable given that the state of our ${Parent} component has changed. We can try to memoize our ${Child} component by wrapping it with **React.memo** to tell React that, "**Hey, this is a pure component, and only re-render this component if its prop changed.**".`

export const CallbackMidPart2 = `
But then the problem still persists! We can debug this by using React Dev Tools profiler and toggle why this component re-renders in the option, but in this case I won't be explaining it with React Dev Tools profiler.

So even though we wrapped our ${Child} component to ensure that it won't re-render unless its props changed, it still doesn't fix the issue, but then we know that our ${Child} prop indeed changes!

If we look back at our code, we are passing an **onHandleClick** function as props in our ${Child} component, which, if we have a recap awhile ago, we know that in React whenever a re-render happens, it re-creates everything from scratch and uses Object.is() for comparison, which in this case the problem is our **onHandleClick** because whenever it's recreated on every re-render, its function definition or function reference in memory is changed!

**What happening behind the scene**: 
`;

export const CallBackEndPart= 
`What happens is that **onHandleClick** function definition -> points to address 12345 in memory, then on the next re-render React creates a new **onHandleClick** function definition that points -> to a new address 12333 in memory, then React compares the newly created **onHandleClick** function to the previous **onHandleClick** function definition in memory which results to false, and causes React re-rendering the ${Child} component because its prop changed. That comes in **useCallback**, which lets us cache our **onHandleClick** function by React returning the same function between re-renders.

So below we wrapped our onHandleClick function with useCallback and specified increment state as its dependency, meaning that this function will only re-render if the dependency, which in our case is increment, is changed. So now whenever we click the button that updates our state to true, it no longer triggers re-render on our ${Child} component.

`;

const EventLoopStart =
`## JavaScript Event loop explained in 10 minutes

JavaScript is a single-threaded language, which means it's a blocking execution and has one call stack, so it can only execute one task at a time, so whenever we perform a synchronous operation in our code, the browser becomes unresponsive till the synchronous operation is finished or is done being evaluated.`;

const EventLoopStart2 = `You can test this by simply running the code below in your browser, and you can see your browser is unresponsive for 5 seconds until the \`Eating\` function is done executing, and you can see that the \`playGame()\` function will only execute after the \`studyWhileEating()\` function is done being evaluated.`;


const EventLoopStart3 = `That comes in Node JS and its event loop with the use of the event loop it made possible for JavaScript to perform async operations without blocking the main thread. Take a look at the example below. We are able to perform an asynchronous operation without blocking the main thread.`;

const EventLoopMid =  
`### How does event loop works?

JavaScript Runtime Environment is comprises  of call stack, task queue (also refers to callback queue), microtask queue,  web api, and the event loop.

What event loop does is it acts as the supervisor that decides which tasks will be executed in the call stack and monitors each place if there are tasks needed to be executed in the call stack.

The **JavaScript Runtime Environment** comprises the following:

**Call Stack**: Executes synchronous code.
**Task Queue (or Callback Queue)**: Handles asynchronous operations like \`setTimeout()\`.
**Microtask Queue**: Processes promises.
**Web API**: Manages background tasks like timers and UI events.
**Event Loop**: Acts as the "supervisor" deciding which tasks to execute in the call stack and monitoring pending tasks in the queues.
        
As you can see above we mentioned Web API and how it handles background tasks like timers and UI but what is a Web API?

Web API is a web worker, a type of JavaScript thread that makes it possible to run a script operation in a background thread separate from the main execution thread of a web application.

After Web API evaluated any operation such as setTimeout() or UI Events it sends the task to task queue.

`;

const EventLoopEnd =  
`
### Execution Order
        
The order of execution of each tasks are based on priority  which all synchronous will be executed first in the call stack, then promises in microtask queue, and then async operations in task queue. 

 1. Synchronous code executes in the call stack.
 2. Promises in the microtask queue are processed.
 3. Async operations in the task queue (e.g., \`setTimeout\`) are handled last.

The event loop will only check and processes tasks in the microtask queue and task queue if there are no more synchronous operations in the call stack. 
`;





export const data: Array<PostProp> = [
    {id: 111, 
    title: "What is useCallback for?", 
    start: CallbackFirstPart,

    start_part2: ParentCode,
    
    start_part3:ChildCode,

    mid: CallBackMidPart,
    mid_part2:CallbackMidPart2,
    end: CallBackEndPart,
    code_one: `import Child './Child';
    const Parent = function (): React.JSX.Element {
        const [state, setState] = useState<boolean>(false);
        const [increment, setIncrement] = useState<number>(0);

        const onHandleClick = (n: number) => { 

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

    }`,
    code_two:`   
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
    export default Child;`,
    code_three:`    
    const Child = function({onClick}: ChildProp): React.JSX.Element {

        const handleClick = () => { 
            
            onClick(5);
        }

        console.log(" Child re-rendered!")
        return <button onClick={handleClick}> Click Me </button> 

    }


    export default React.memo(Child)
    `,
    code_four: `
    import Child './Child';
    const Parent = function (): React.JSX.Element {
        const [state, setState] = useState<boolean>(false);
        const [increment, setIncrement] = useState<number>(0);

    //function definition or reference in memory is changed whenever a re-render happens 
        const onHandleClick = (n: number) => { 

            setIncrement(n+ increment);
        }

        console.log("Value of state", state)
        console.log("Value of increment", increment)

        return (
            <>
                <button onClick={()=> setState(!state)}>Set State</button>	
                //which causes for the <Child/> to re-render 
                <Child onClick={onHandleClick}/> 
            </>
        )

    }`,
    code_five:`
    //previous function definition or reference points to address 12345 in memory
    onHandleClick --> points 12345

    //React creates new function definition after re-render 
    //and points to new address 12333 in memory

    onHandleClick ---> points 12333 

    console.log(onHandleClick === onHandleClick) //results to false.

    `,
    code_six: `
    import Child from "./Child";
    import { useState } from "react";
    import { useCallback } from "react";
    const Parent = function (): React.JSX.Element {
        const [state, setState] = useState<boolean>(false);
        const [increment, setIncrement] = useState<number>(0);
        
        // cache onHandleClick function definition
        const onHandleClick = useCallback((n: number) => { 
            
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
    `
    },
    {
        id: 1244,
        title: "JavaScript Event loop explained in 10 minutes",
        start: EventLoopStart,    
        start_part2: EventLoopStart2,
        start_part3: EventLoopStart3,
        mid: "",
        mid_part2: EventLoopMid,
        end: EventLoopEnd,

        code_one: `
        function studyWhileEating() {

        console.log("I'm studying")
        Eating();
        console.log("Done eating and done studying");
        
        }
        
        function playGame() {
        
        console.log("Playing game now!")
        }
        
        function Eating() {
            /// eats for 5 seconds
        const start = Date.now();
        while(Date.now() - start < 5000) {
        
        }
        console.log("Done eating");
        }
        
        
        studyWhileEating();
        playGame();
        `,
        code_two: `
        console.log("Start")
        setTimeout(() => {
            console.log("I'm async operation")
        }, 1000)

        console.log("End")

        /* Result:
        Start
        End
        I'm async operation


        */`,
        code_three: "",
        code_four: "",
        code_five: "",
        code_six: `
        console.log("Start")


        /* 
        If both execution has the same timer but one has promise and the other doesn't
        the first priority is to execute the timer with promise first.

        */
        setTimeout(() => {
            Promise.resolve("setTimeout with promise").then(console.log);
        }, 1000)


        setTimeout(() => {
            console.log("setTimeout without promise")
        }, 1000)


        /*
        Task Executed by order of their timer

        setTimeout(() => {
            console.log("setTimeout without promise")
        }, 0) */

        Promise.resolve("Promise only").then(console.log);


        console.log("End")

        `,


    }
]
