import React, { useState } from 'react'
import { useRouter } from 'next/router'


const SearchBox = () => {
    const [search, setSearch] = useState('')
    const route = useRouter()
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            route.push({ pathname: '/search', query: { search: search } })
            setSearch("")
        }
    }
    const handleSubmit = () => {
        route.push({ pathname: '/search', query: { search: search } })
        setSearch("")
    }
    return (
        <div className="flex mb-4 md:mb-0">
            <input
                onKeyDown={handleSearch}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                value={search}
                placeholder="Search Product"
                className="border border-orange-500 lg:w-96 w-full px-2 outline-none md:py-3 py-1"
            />
            <button onClick={handleSubmit} className="border bg-orange-500 border-orange-500 text-white lg:w-40 md:px-6 px-4 outline-none md:py-3 py-1 flex justify-center items-center sm:text-lg font-medium">
                Search
            </button>
        </div>
    )
}

export default SearchBox