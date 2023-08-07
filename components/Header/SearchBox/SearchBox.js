import React from 'react'

const SearchBox = () => {
    return (
        <div className="flex">
            <input
                type="text"
                placeholder="Search Product"
                className="border border-orange-500 lg:w-96 w-full px-2 outline-none py-3"
            />
            <button className="border bg-orange-500 border-orange-500 text-white lg:w-40 px-6 outline-none py-3">
                Search
            </button>
        </div>
    )
}

export default SearchBox