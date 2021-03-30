export const search = (term, indexer, category) => {
    let params = {
        q: term,
        category: category,
        indexer: indexer
    }
    fetch(`localhost:${process.env.REACT_APP_API_PORT}/search` + new URLSearchParams(params))
        .then(function (response) {
            if (response.status !== 200) {
                console.log("Status code:" + response.status)
                return response.status
            }
            return response.json()
        })
        .catch(function (err) {
            console.log("Fetch Error", err)
        })
}

export const indexers = () => {
    fetch(`${window.location.hostname}:${window.location.port}/indexers`)
        .then(function (response) {
            if (response.status !== 200) {
                console.log("Status code:" + response.status)
                return response.status
            }
            return response.json()
        })
        .catch(function (err) {
            console.log("Fetch Error", err)
        })
}

export const recents = () => {
    fetch(`${window.location.hostname}:${window.location.port}/recents`)
        .then(function (response) {
            if (response.status !== 200) {
                console.log("Status code:" + response.status)
                return response.status
            }
            return response.json()
        })
        .catch(function (err) {
            console.log("Fetch Error", err)
        })
}

export const removeRecent = (item) => {
    let params = {
        item: item
    }
    fetch(`${window.location.hostname}:${window.location.port}/removeRecent` + new URLSearchParams(params))
        .then(function (response) {
            if (response.status !== 200) {
                console.log("Status code:" + response.status)
                return response.status
            }
            return response.json()
        })
        .catch(function (err) {
            console.log("Fetch Error", err)
        })
}
