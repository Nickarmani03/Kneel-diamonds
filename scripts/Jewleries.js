import { getJewleries, setJewlery } from "./database.js"

const jewleries = getJewleries()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "jewlery") { // sees if a change even has happened
        setJewlery(parseInt(changeEvent.target.value))
        }
    }
)

export const Jewleries = () => {

    let html = "<ul class='choice--list jewlery--list'>"

    const itemsArray = jewleries.map(jewlery => {
        return `<li>
            <input type="radio" name="jewlery" value="${jewlery.id}" /> ${jewlery.types}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += itemsArray.join("")

    html += "</ul>"
    return html
}
