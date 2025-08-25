import {useEffect} from 'react'
import './App.css'

function App() {

    useEffect(() => {
        (async function() {
            const response = await  fetch('https://musicfun.it-incubator.app/api/1.0/playlists', {
                headers: {
                    // TODO удалить этот ключ!
                    "api-key": '8ca9f37a-81c3-44d3-b627-0a28713999e7'
                }  })

            const data =  response.json()
            console.log(data)
        })()
    }, []);

  return (
    <>
      <div>Hello</div>
    </>
  )
}

export default App
