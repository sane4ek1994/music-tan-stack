import './App.css'
import {useQuery} from "@tanstack/react-query";

function App() {

    // useEffect(() => {
    //     (async function() {
    //       const response = await client.GET("/playlists")
    //         const data = response.data
    //
    //         console.log(data.data.map((playlist) => playlist.attributes.))
    //     })()
    // }, []);

    const query = useQuery({
        queryKey: ["playlists"],
        queryFn: () => 100
    })


    console.log(query.data)


  return (
    <>
      <div>Hello</div>
    </>
  )
}

export default App
