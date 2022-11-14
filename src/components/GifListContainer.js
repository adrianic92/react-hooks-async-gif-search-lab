import React, {useEffect, useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
import "bootstrap/dist/css/bootstrap.css";

function GifLisTContainer() {
    const [search, setSearch] = useState("dolphin")
    const [imgs, setImgs] = useState([])
    
    
    useEffect( () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=d0S2ibLzj7oatiCxpkqpMLevxnyWW3TM&rating=g`)
        .then(resp => resp.json())
        .then(data => {
          const array = []
          for (let i = 0; i < 3; i++) {
            array.push({
              id: i,
              image: (data.data[`${i}`]? data.data[`${i}`].images.original.url : null)  })
          }
          setImgs(array)
        })
    }, [search])

    return (
        <div style={{ display: "flex", columnCount: "2", columnGap: "20rem" }} >
            <GifList imgs={imgs}/>
            <GifSearch setSearch={setSearch}/>
        </div>
    )
}

export default GifLisTContainer