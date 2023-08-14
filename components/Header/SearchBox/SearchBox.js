import { productsData } from '@/utlits/productsData'
import React from 'react'
import { useState } from 'react'

const SearchBox = () => {
    const [search, setSearch] = useState('')
    const handleSearchSubmit = () => {
        const x = productsData.filter(({ title }) => title === search)
        console.log(x)
    }
    return (
        <div className="flex">
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search Product"
                className="border border-orange-500 lg:w-96 w-full px-2 outline-none py-3"
            />
            <button onClick={handleSearchSubmit} className="border bg-orange-500 border-orange-500 text-white lg:w-40 px-6 outline-none py-3">
                Search
            </button>
        </div>
    )
}

export default SearchBox