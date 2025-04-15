{
    const delay = (delayTime) => {
        return new Promise(resolve => {
            setTimeout(resolve, delayTime)
        })
    }

    const getListings = () => {
        const listings = document.querySelectorAll(".listing-holder")
        for (const listing of listings) {
            const href = listing.querySelector("a").href
            const tds = listing.querySelectorAll("td")
            const arr = Array.from(tds)
            const listingDescription = arr[0].innerText
            console.log(`Description: ${listingDescription} - URL: ${href}`)
        }
    }

    const goToNextPage = async () => {
        let nextPageButton = document.querySelector("#btn-page-next")
        // while (!nextPageButton.disabled) {
        await delay(2000)
        getListings()
        // debugger
        // nextPageButton.click()
        // nextPageButton = document.querySelector("#btn-page-next")
        // }
    }

    goToNextPage()
}