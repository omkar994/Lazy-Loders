import { useEffect, useState } from 'react';
import './App.css';

function LazyLodedComp() {
  const [loders, setLoders] = useState([]);

 
  const getLazyLoaders = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    setLoders(await response.json());

  }
  

  useEffect(() => {
    getLazyLoaders();
  }, []);
  return (
    <>
    
      <div className="App">
      <header className="App-header">
        
        {
          loders.map((currEle) => {
            return (
              
                <div>
                <div className="lodersClass">
                  <div className="avatar">
                  {<img src={`https://avatars.dicebear.com/api/male/${currEle.id}.svg`}/>}
                 
                  </div>

                  <div className="details">
                    <p>{currEle.name}</p><br />
                    <p>{currEle.email}</p>
                  </div>
                </div>

              </div>
              
              
              
          )
        })
        }


      </header>
    </div>
    </>
    
  );
}

export default LazyLodedComp;
