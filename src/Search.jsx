import React from "react"
import { MdClose, MdSearch } from "react-icons/md"

const SearchForm = () => {
    return (
        <form>
            <div className="flex flex-col">
                <div className="flex flex-row m-5">
                    <div className="w-1/12">
                        <MdSearch className="dark:text-mine-shaft-100 w-10 h-10" />
                    </div>
                    <input
                        className="dark:bg-mine-shaft-800 dark:text-mine-shaft-100 bg-white text:black p-3 h-10 mb-5 w-11/12"
                        placeholder="Search"
                    />
                </div>
                <div className="flex flex-row">
                    <div className="text-center w-1/2">
                        <select className="dark:bg-mine-shaft-800 dark:text-mine-shaft-100 h-10 w-4/6">
                            <option>1337x</option>
                            <option>RARBG</option>
                        </select>
                    </div>
                    <div className="text-center w-1/2">
                        <select className="dark:bg-mine-shaft-800 dark:text-mine-shaft-100 h-10 w-4/6">
                            <option>10000: Anime</option>
                            <option>6969: Movies</option>
                            <option>420: TV</option>
                            <option>666: Satanic Rituals</option>
                            <option>1234: Games</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
}

const RecentItem = (props) => {
    const removeRecent = (term) => {
        console.log("This is where stuff happens")
    }
    
    return (
        <li>
            <div className="flex flex-row m-3 p-2 rounded-md dark:bg-mine-shaft-700 dark:text-mine-shaft-200">
                <p className="w-11/12">{props.term}</p>
                <MdClose className="w-1/12 h-6 dark:hover:bg-mine-shaft-600" />
            </div>
        </li>
    )
}

const MainCard = () => {
    // Load in up to 5 recent searches here
    return (
        <div className="flex flex-col m-auto w-1/2 shadow-lg dark:bg-mine-shaft-800 bg-white rounded-md">
            <SearchForm />
            <div className="m-5">
                <div>
                    <h1 className="dark:text-mine-shaft-100">Recent Searches</h1>
                </div>
                <ul>
                    <RecentItem term="Ubuntu" />
                    <RecentItem term="Weezer" />
                    <RecentItem term="Harry Potter" />
                    <RecentItem term="Idk" />
                    <RecentItem term="Idk" />
                </ul>
            </div>
        </div>
    )
}

export const SearchPage = () => {
    return (
        <div className="bg-mine-shaft-50 dark:bg-mine-shaft-900 flex h-screen">
            <div className="mb-10 text-center m-5">
                <h1 className="font-sans mb-5 dark:text-mine-shaft-100 text-black text-4xl">
                    Reactorr
                </h1>
            </div>
            <MainCard />
        </div>
    )
}
