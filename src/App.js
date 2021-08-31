import React, {lazy, Suspense} from 'react';
import './App.css';
const LazyLodedComp = lazy(() => import('./LazyLodedComp'));

function App() {
 

 
  return (
    <>
    <h1>Hello Folks</h1>
    <Suspense fallback={<div>Loading.. .</div>}>
    <LazyLodedComp/>
    </Suspense>
    
      
    </>
    
  );
}

export default App;
