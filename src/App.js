import React, { useState } from 'react'
import axios from 'axios'
import WikiCard from './components/WikiCard'
import './App.css';

const App = () => {

  const [urlInfo, setUrlInfo] = useState([])

  const getData = () => {
    axios
        .get("https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=earth&limit=10")
        .then(response => {
          console.log(response.data.pages);
          setUrlInfo(response.data.pages)
          console.log(urlInfo)

        })
        .catch(error => {
          console.log("Error:", error);
        });
        // setUrlInfo(
        //   [{
        //     key: 1,
        //     title: 'hello world',
        //     thumbnail: {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2xl8rfONRzFklWCCnXTsbwHaHC%26pid%3DApi&f=1'}
        //     }
        //   ]
        // )
  }





  return (
    <div>
      <button onClick={getData}>Click</button>
        {urlInfo.map(img => {
          return(
            <div className="App">
              <WikiCard
                title={img.title}
                url={img.thumbnail.url}/>
            </div>
            )
          }
        )
      }
    </div>

  )
}

export default App
