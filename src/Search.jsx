import React, { useState } from "react"
import { MdClose, MdSearch } from "react-icons/md"

const IndexerSelect = () => {
    let indexers = ["1337x", "RARBG", "Solid Torrents"]
    return (
        <div className="text-center w-1/2">
            <select className="dark:bg-mine-shaft-700 dark:text-mine-shaft-100 dark:hover:bg-mine-shaft-600 rounded-md h-10 w-4/6">
                {indexers.map((indexer, index) => (
                    <option key={index}>{indexer}</option>
                ))}
            </select>
        </div>
    )
}

const CatSelect = () => {
<<<<<<< Updated upstream
    let categories = [
        "2000: Movies",
        "2500: TV",
        "666: Satanic Rituals",
        "1234: Something Else",
    ]
    return (
        <div className="text-center w-1/2">
            <select className="dark:bg-mine-shaft-700 dark:text-mine-shaft-100 dark:hover:bg-mine-shaft-600 rounded-md h-10 w-4/6">
                {categories.map((category, index) => (
                    <option key={index}>{category}</option>
=======
    const [categories, setCategories] = useState([
        "1000",
        "2000",
        "3000"
    ])

    
    return (
        <div className="text-center w-1/2">
            <select className="dark:bg-mine-shaft-700 dark:text-mine-shaft-100 dark:hover:bg-mine-shaft-600 rounded-md h-10 w-4/6">
                {categories.map((item, index) => (
                    <option key={index}>{item}</option>
>>>>>>> Stashed changes
                ))}
            </select>
        </div>
    )
}

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            console.log(`Search for ${searchTerm}`)
        }
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="flex flex-col m-2">
            <div className="flex flex-row">
                <MdSearch className="w-1/12 h-10 dark:text-mine-shaft-100" />
                <input
                    className="dark:bg-mine-shaft-700 dark:text-mine-shaft-100 focus:outline-none focus:ring-2 focus:ring-purple-700 bg-white text-black dark:hover:bg-mine-shaft-600 rounded-md p-5 h-10 mb-3 mr-2 w-11/12"
                    placeholder="Search"
                    onKeyPress={handleSearch}
                    onChange={handleChange}
                    value={searchTerm}
                />
            </div>
            <div className="flex flex-row">
                <IndexerSelect />
                <CatSelect />
            </div>
        </div>
    )
}

const RecentItem = (props) => {
    return (
        <li>
            <div className="flex flex-row m-3 p-2 rounded-md dark:bg-mine-shaft-600 dark:hover:bg-mine-shaft-500 dark:text-mine-shaft-200">
                <p className="w-11/12">{props.term}</p>
                <MdClose className="w-1/12 h-7 dark:hover:bg-mine-shaft-400" />
            </div>
        </li>
    )
}

export const Card = () => {
    let recentSearches = [
        "Ubuntu",
        "Weezer",
        "Iron man",
        "30 Rock",
        "Office 2020 crack",
    ]
    return (
        <div className="m-auto w-1/2 shadow-lg p-5 dark:bg-mine-shaft-700 bg-white rounded-md">
            <SearchForm />
            <div className="p-3">
                <div>
                    <h1 className="dark:text-mine-shaft-100">
                        Recent Searches
                    </h1>
                </div>
                <ul>
                    {recentSearches.map((item, index) => (
                        <RecentItem key={index} term={item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Main page component
export const SearchPage = () => {
    return (
        <div className="bg-mine-shaft-50 dark:bg-mine-shaft-800 h-screen">
            <div className="mb-10 text-left p-5">
                <h1 className="font-sans mb-5 dark:text-mine-shaft-100 text-black text-4xl">
                    Reactorr
                </h1>
            </div>
            <Card />
        </div>
    )
}
