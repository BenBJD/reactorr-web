import axios from "axios"

export const getResults = async (term, indexer, category) => {
    let params = {
        q: term,
        category: category,
        indexer: indexer
    }
    let response
    response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}${REACT_APP_API_ROOT}/search`, { params: params })
    return response
}

export const getIndexers = async () => {
    let response
    response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}${REACT_APP_API_ROOT}/indexers`)
    return response
}

export const getRecents = async (number) => {
    let params = {
        number: number,
    }
    let response = await axios.get(`http://localhost:${process.env.REACT_APP_API_PORT}${REACT_APP_API_ROOT}/recents`, { params: params })
    return response
}

export const removeRecent = async (id, all) => {
    let params = {
        id: id,
        all: all,
    }
    let response = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}${REACT_APP_API_ROOT}/recents`, {}, { params: params })
    return response
}

// Tests

// search("Office", "1337x", 4000)
//     .then(response => console.log(response))
