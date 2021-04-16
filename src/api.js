export const search = (term, indexer, category) => {
    let params = {
        q: term,
        category: category,
    }
    fetch(`192.168.1.20:5080/search/${indexer}` + new URLSearchParams(params))
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
