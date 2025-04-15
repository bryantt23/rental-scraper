{
    const delay = (delayTime) => {
        return new Promise(resolve => {
            setTimeout(resolve, delayTime)
        })
    }

    const goToNextPage = async () => {
        for (let i = 0; i < 3; i++) {
            const nextPageButton = document.querySelector("#btn-page-next")
            nextPageButton.click()
            await delay(3000)
        }
    }

    goToNextPage()
}