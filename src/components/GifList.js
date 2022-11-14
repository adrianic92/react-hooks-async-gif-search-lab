import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

function GifList( { imgs }) {
    

    const allImgs = imgs.map( img => {
        
            if (img.image === null) {
            return <h1>Nothing to see here...</h1>
        }
        
        return (
            <li key={img.id}>
                <img alt={img.id} src={img.image} style={{ maxHeight: "30vh", maxWidth: "30vh"}} />
            </li>
        )
    })
    
    return (
        <ul>{allImgs}</ul>
    )
}

export default GifList