
import { useRef, useState, useEffect} from 'react';
import About from './pages/About';
import Homepage from './pages/Homepage'
import useIntersectionObserver from './components/hooks/useIntersectionObservation';
import Contact from './pages/Contact';
import MobileSidebar from './pages/shared/MobileSidebar';
import DesktopSidebar from './pages/shared/DesktopSidebar';



function App() {
 // update the ref inside the observer when checking entry.isIntersecting.
 // to true else false.
 
 const normalRef = useRef<HTMLDivElement>(null);
 const  {updatedRefs} = useIntersectionObserver();

  
 
 console.log("Updated Refs", updatedRefs)
  return (
 
    
        
    <div className="app-container">
    
      <Homepage element={updatedRefs[0].element} inView={updatedRefs[0].inView}/>
      {/*add background color in the page itself and just animate the entrance*/}
      <About element={updatedRefs[1].element} inView={updatedRefs[1].inView}/>
      
      <Contact  element={updatedRefs[2].element} inView={updatedRefs[2].inView}/>
      <div className='div'>TEST</div>

      <MobileSidebar/>
      <DesktopSidebar/>
            
    </div>
     
     
      
   
  )
}

export default App

// BUG: When i add elements in app the intersection wont work because the components that are
// min-height is set to 100vh it cuts in half but when I set rootmargin to 100px it worked

/* 
 Use React.Memo() to the components under App to make sure when sidebar causes re-render others wont be re-render.

*/