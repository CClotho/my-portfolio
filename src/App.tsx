

import Homepage from './pages/Homepage'
import Sidebar from './pages/shared/Sidebar';

function App() {
    

  return (
    <>

     <Homepage/>
     <Homepage/>
     <Homepage/>
  
     <Sidebar/>
     
     
     
      
    </>
  )
}

export default App


/* 
 Use React.Memo() to the components under App to make sure when sidebar causes re-render others wont be re-render.

*/