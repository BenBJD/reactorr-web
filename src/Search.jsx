import React, { useEffect, useState } from "react"
import { MdClose, MdSearch } from "react-icons/md"
import { useHistory } from "react-router"
import { getRecents, getIndexers, removeRecent } from "./api"

const SearchOptions = (props) => {
    const [indexers, setIndexers] = useState([])

    useEffect(async () => {
        let apiCall = await getIndexers()
        setIndexers(apiCall.data)
    }, [])

    const handleIndexerSelect = (event) => {
        props.setSelectedIndexer(event.target.value.split(","))
    }

    const handleCategorySelect = (event) => {
        props.setSelectedCategory(event.target.value)
    }

    if (indexers.length === 0) {
        return <div />
    }
    
    return (
        <div className="flex flex-row">
            <div className="text-center w-1/2">
                <select onChange={handleIndexerSelect} className="dark:bg-mine-shaft-700 dark:text-mine-shaft-100 dark:hover:bg-mine-shaft-600 rounded-md h-10 w-4/6">
                    {indexers.map((indexer, index) => (
                        <option key={index} value={[indexer["title"], index]} title={indexer["title"]}>{indexer["title"]}</option>
                    ))}
                </select>
            </div>
            <div className="text-center w-1/2">
                <select onChange={handleCategorySelect} className="dark:bg-mine-shaft-700 dark:text-mine-shaft-100 dark:hover:bg-mine-shaft-600 rounded-md h-10 w-4/6">
                    {indexers[props.selectedIndexer[1]]["categories"].map((category, index) => (
                        <option key={index} value={category["id"]}>{category["name"]}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

const SearchForm = () => {
    const [query, setquery] = useState("")
    const [selectedIndexer, setSelectedIndexer] = useState(["", 0])
    const [selectedCategory, setSelectedCategory] = useState("")
    let history = useHistory()
    
    const handleSearch = (event) => {
        if (event.key === "Enter") {
            history.push({
                pathname: "/search",
                state: {
                    query: query,
                    indexer: selectedIndexer,
                    category: selectedCategory
                }
            })
        }
    }

    const handleChange = (event) => {
        setquery(event.target.value)
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
                    value={query}
                />
            </div>
            <SearchOptions selectedIndexer={selectedIndexer} setSelectedIndexer={setSelectedIndexer} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
    )
}

const RecentItem = (props) => {
    return (
        <li>
            <div className="flex flex-row m-3 p-2 rounded-md dark:bg-mine-shaft-600 dark:hover:bg-mine-shaft-500 dark:text-mine-shaft-200">
                <p className="w-11/12">{props.term}</p>
                <MdClose className="w-1/12 h-7 dark:hover:bg-mine-shaft-400" onClick={() => props.handleRecentDelete(props.id)} />
            </div>
        </li>
    )
}

export const Card = () => {
    const [recentSearches, setRecentSearches] = useState(["Test search"])
    
    useEffect(async () => {
        let apiCall = await getRecents(5)
        setRecentSearches(apiCall.data)
    }, [recentSearches.length])

    const handleRecentDelete = async (id) => {
        removeRecent(id, false)
        setRecentSearches([])
    }

    // if (recentSearches.length === 0) {
    //     return <div />
    // }

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
                        <RecentItem key={index} id={item[0]} term={item[1]} handleRecentDelete={handleRecentDelete} />
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
