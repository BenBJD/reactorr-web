import React, { useEffect, useState } from "react"
import moment from "moment"
import fileSize from "filesize"
import { FaMagnet } from "react-icons/fa"
import { useLocation } from "react-router"
import { getResults } from "./api"

const SearchResult = props => {
    return (
        <li className="dark:bg-mine-shaft-600 rounded-md mb-3">
            <a className="dark:text-mine-shaft-50 p-2 text-xl" href={props.item["link"]}>
                {props.item["title"]}
            </a>
            <ul className="inline-flex">
                <li className="dark:bg-mine-shaft-500 rounded-md p-2 m-1">
                    <a href={props.item["magnet"]}>
                        <FaMagnet className="dark:text-mine-shaft-100" />
                    </a>
                </li>
                <li className="dark:bg-mine-shaft-500 rounded-md p-2 m-1">
                    <p className="dark:text-mine-shaft-100">
                        Seeders: {props.item["seeders"]}
                    </p>
                </li>
                <li className="dark:bg-mine-shaft-500 rounded-md p-2 m-1">
                    <p className="dark:text-mine-shaft-100">
                        Peers: {props.item["peers"]}
                    </p>
                </li>
                <li className="dark:bg-mine-shaft-500 rounded-md p-2 m-1">
                    <p className="dark:text-mine-shaft-100">
                        Size: {fileSize(props.item["size"])}
                    </p>
                </li>
                <li className="dark:bg-mine-shaft-500 rounded-md p-2 m-1">
                    <p className="dark:text-mine-shaft-100">
                        Date: {moment(props.item["date"]).format("dddd, MMMM Do YYYY")}
                    </p>
                </li>
            </ul>
        </li>
    )
}

export const ResultsPage = () => {
    const location = useLocation()
    const [searchResults, setSearchResults] = useState([])

    useEffect(async () => {
        let apiCall = await getResults(location.state.query, location.state.indexer[0], location.state.category)
        setSearchResults(apiCall.data)
    }, [])

    if (searchResults.length === 0) {
        return <div></div>
    }

    return (
        <div className="bg-mine-shaft-50 dark:bg-mine-shaft-800 h-full">
            <div className="mb-3 text-left p-5">
                <h1 className="font-sans mb-5 dark:text-mine-shaft-100 text-black text-4xl">
                    Reactorr
                </h1>
            </div>
            <div className="m-auto w-3/4 shadow-lg p-5 dark:bg-mine-shaft-700 bg-white rounded-md">
                <p className="text-4xl dark:text-mine-shaft-100 mb-4 justify-end">Search Results</p>
                <ul>
                    {searchResults.map((item, index) => (
                        <SearchResult item={item} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
