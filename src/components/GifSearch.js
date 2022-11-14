import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";

function GifSearch({setSearch}) {
    const [input, setInput] = useState("")
    
    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setSearch(input)
    }

    console.log(input)

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group">
                <label>Enter a Search Term:</label>
                <input type="text" value={input} onChange={handleChange} className="form-control"></input>
                <button type="submit" value="submit" className="btn btn-success">Find Gifs</button>
            </form>
        </div>
    )
}

export default GifSearch