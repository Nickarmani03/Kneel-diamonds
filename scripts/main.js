import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//State of data has changed. Regenerating HTML...
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})