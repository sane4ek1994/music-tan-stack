import {useQuery} from "@tanstack/react-query";
import {client} from "../../shared/api/client.ts";
import {useEffect, useState} from "react";

function PlayListsPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setIsVisible(prev => !prev)
        }, 10000)
    }, [])

  return (
    <>
      <div>Hello!!!</div>
        {isVisible &&<Playlists/>}
    </>
  )
}

const Playlists = () => {
    const query = useQuery({
        queryKey: ["playlists"],
        queryFn:  () => client.GET("/playlists")
    })

    return     <ul>
        {query.data?.data?.data.map((playlist) => (
            <li key={playlist.id}>{playlist.attributes.title}</li>))}
    </ul>
}

export default PlayListsPage
