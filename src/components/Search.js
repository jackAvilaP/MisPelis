import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" name="search" id="search" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search