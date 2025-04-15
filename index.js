{
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.txt'

    let listingData = ``

    const delay = (delayTime) => {
        return new Promise(resolve => {
            setTimeout(resolve, delayTime)
        })
    }

    const updateFile = () => {
        console.log("🚀 ~ updateFile ~ listingData:", listingData)
        const blob = new Blob([listingData], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'listings.txt'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)// Clean up the object URL
    }

    const getListings = () => {
        const listings = document.querySelectorAll(".listing-holder")
        for (const listing of listings) {
            const href = listing.querySelector("a").href
            const tds = listing.querySelectorAll("td")
            const arr = Array.from(tds)
            const listingDescription = arr[0].innerText
            listingData += `\nDescription: ${listingDescription}URL: ${href}`
        }
    }

    const visitPages = async () => {
        let nextPageButton = document.querySelector("#btn-page-next")
        // while (!nextPageButton.disabled) {
        getListings()
        await delay(2000)
        // debugger
        // nextPageButton.click()
        // nextPageButton = document.querySelector("#btn-page-next")
        // }
    }

    const start = async () => {
        visitPages()
        updateFile()
    }

    start()
}