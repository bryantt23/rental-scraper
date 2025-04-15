{
    const delay = (delayTime) => {
        return new Promise(resolve => {
            setTimeout(resolve, delayTime)
        })
    }

    const goToNextPage = async () => {
        let nextPageButton = document.querySelector("#btn-page-next")
        while (!nextPageButton.disabled) {
            nextPageButton.click()
            await delay(2000)
            nextPageButton = document.querySelector("#btn-page-next")
        }
    }

    goToNextPage()
}