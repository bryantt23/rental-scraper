{
    let listingData = ``

    const delay = (delayTime) => {
        return new Promise(resolve => {
            setTimeout(resolve, delayTime)
        })
    }

    const updateFile = () => {
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

    const getListings = async () => {
        const listings = document.querySelectorAll(".listing-holder")
        for (const listing of listings) {
            const href = listing.querySelector("a").href
            const tds = listing.querySelectorAll("td")
            const arr = Array.from(tds)
            const listingDescription = arr[0].innerText
            listingData += `\nDescription: ${listingDescription}${href}`
        }
        await delay(1000)
    }

    const visitPages = async () => {
        while (true) {
            await getListings()
            let nextPageButton = document.querySelector("#btn-page-next")
            if (!nextPageButton || nextPageButton.disabled) {
                break;
            }
            nextPageButton.click()
            await delay(1000)
        }
    }

    const start = async () => {
        await visitPages()
        updateFile()
    }

    start()
}